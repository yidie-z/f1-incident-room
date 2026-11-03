#!/usr/bin/env python3
"""
OpenF1 后备导出器：当 FastF1 官方计时接口不可用时，用 OpenF1（api.openf1.org）
导出与 generate_incident.py 相同结构的 telemetry.json。

用法：
    python tools/openf1_export.py --session-key 11404 --lap 59 \
        --drivers 41:LIN 81:PIA --year 2026 --gp "Mexico City Grand Prix" \
        --out src/data/incidents/mexico2026-pia-lin/telemetry.json
"""
import argparse
import datetime as dt
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE = 'https://api.openf1.org/v1'
SAMPLES_PER_LAP = 80
TELEM_BACK = 4          # 遥测：事故圈往前 4 圈
LAPTIMES_BACK = 14      # 圈速表：事故圈往前 14 圈
LAPTIMES_FORWARD = 2    # 圈速表：事故圈往后 2 圈


def get(path: str, **params):
    url = f"{BASE}/{path}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'f1-incident-room/1.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = json.loads(r.read().decode())
    time.sleep(0.45)  # 遵守 OpenF1 限速
    return data


def parse_ts(s: str) -> float:
    return dt.datetime.fromisoformat(s.replace('Z', '+00:00')).timestamp()


def fmt(ts: float) -> str:
    return dt.datetime.fromtimestamp(ts, tz=dt.timezone.utc).strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3]


def resample_lap(car_data, t0, t1, min_dist=1000):
    """把一圈的 car_data 积分成距离，再按 80 个等距点插值出各通道。"""
    rows = [(parse_ts(r['date']), r) for r in car_data if t0 <= parse_ts(r['date']) <= t1]
    rows.sort()
    if len(rows) < 10:
        return None
    dist, speed, thr, brk, gear, drs = [0.0], [], [], [], [], []
    for i, (ts, r) in enumerate(rows):
        v = float(r.get('speed') or 0)
        speed.append(v)
        thr.append(float(r.get('throttle') or 0))
        brk.append(1 if (r.get('brake') or 0) else 0)
        gear.append(int(r.get('n_gear') or 0))
        drs.append(int(r.get('drs') or 0))
        if i > 0:
            dt_s = ts - rows[i - 1][0]
            v_prev = float(rows[i - 1][1].get('speed') or 0)
            dist.append(dist[-1] + (v + v_prev) / 2 / 3.6 * dt_s)
    total = dist[-1]
    if total < min_dist:  # 距离过短视为残缺圈
        return None

    def interp(series):
        out, j = [], 0
        for k in range(SAMPLES_PER_LAP):
            x = total * k / (SAMPLES_PER_LAP - 1)
            while j < len(dist) - 2 and dist[j + 1] < x:
                j += 1
            d0, d1 = dist[j], dist[j + 1]
            w = 0.0 if d1 <= d0 else (x - d0) / (d1 - d0)
            out.append(series[j] + (series[j + 1] - series[j]) * w)
        return out

    return {
        'dist': [round(total * k / (SAMPLES_PER_LAP - 1), 1) for k in range(SAMPLES_PER_LAP)],
        'speed': [round(x) for x in interp(speed)],
        'throttle': [round(x) for x in interp(thr)],
        'brake': [round(x) for x in interp(brk)],
        'gear': [round(x) for x in interp(gear)],
        'drs': [round(x) for x in interp(drs)],
    }


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--session-key', type=int, required=True)
    p.add_argument('--lap', type=int, required=True, help='事故圈')
    p.add_argument('--drivers', nargs='+', required=True, metavar='NUM:CODE')
    p.add_argument('--year', type=int, required=True)
    p.add_argument('--gp', required=True)
    p.add_argument('--out', required=True)
    args = p.parse_args()

    drivers = {}
    for spec in args.drivers:
        num, code = spec.split(':')
        drivers[int(num)] = code

    sk = args.session_key
    lap_lo_t, lap_hi_t = args.lap - TELEM_BACK, args.lap
    lap_lo_lt, lap_hi_lt = args.lap - LAPTIMES_BACK, args.lap + LAPTIMES_FORWARD

    lap_times = []
    telemetry = {code: [] for code in drivers.values()}

    for num, code in drivers.items():
        laps = {l['lap_number']: l for l in get('laps', session_key=sk, driver_number=num)}
        stints = get('stints', session_key=sk, driver_number=num)
        positions = get('position', session_key=sk, driver_number=num)
        pos_series = sorted(((parse_ts(x['date']), x['position']) for x in positions), key=lambda x: x[0])

        def stint_at(lap_no):
            for s in stints:
                if s['lap_start'] <= lap_no <= (s['lap_end'] or 999):
                    return s
            return None

        def pos_at(ts):
            cur = None
            for t, pos in pos_series:
                if t <= ts:
                    cur = pos
                else:
                    break
            return cur

        # ---- lapTimes 窗口 ----
        for lap_no in range(max(1, lap_lo_lt), lap_hi_lt + 1):
            l = laps.get(lap_no)
            if not l or not l.get('lap_duration'):
                continue
            st = stint_at(lap_no)
            end_ts = parse_ts(l['date_start']) + l['lap_duration']
            lap_times.append({
                'driver': code,
                'lap': lap_no,
                'time': round(l['lap_duration'], 3),
                'compound': (st or {}).get('compound'),
                'tyreLife': (lap_no - st['lap_start'] + 1 + st['tyre_age_at_start']) if st else None,
                'position': pos_at(end_ts),
            })

        # ---- 遥测窗口 ----
        for lap_no in range(max(1, lap_lo_t), lap_hi_t + 1):
            l = laps.get(lap_no)
            if not l or not l.get('date_start'):
                continue
            t0 = parse_ts(l['date_start'])
            # 事故圈可能因退赛没有完整圈时长：改用下一圈起点或 100 秒窗口
            if l.get('lap_duration'):
                t1 = t0 + l['lap_duration'] + 1.0
                min_dist = 1000
            else:
                nxt = laps.get(lap_no + 1)
                t1 = parse_ts(nxt['date_start']) if nxt and nxt.get('date_start') else t0 + 100
                min_dist = 300
            car = get('car_data', session_key=sk, driver_number=num,
                      **{'date>': fmt(t0 - 1.0), 'date<': fmt(t1)})
            ch = resample_lap(car, t0, t1, min_dist)
            if ch:
                ch_out = {'lap': lap_no}
                ch_out.update(ch)
                telemetry[code].append(ch_out)
                print(f'{code} 第 {lap_no} 圈：{len(car)} 采样，{ch["dist"][-1]:.0f} m，尾速 {max(ch["speed"])} km/h')
            else:
                print(f'!! {code} 第 {lap_no} 圈数据不足，跳过')

    out = {
        'lapTimes': lap_times,
        'telemetry': telemetry,
        'meta': {
            'year': args.year,
            'gp': args.gp,
            'incidentLap': args.lap,
            'detectedAt': dt.date.today().isoformat() + ' (via OpenF1)',
        },
    }
    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, ensure_ascii=False), encoding='utf-8')
    print(f'写入 {out_path}（{out_path.stat().st_size // 1024} KB）')


if __name__ == '__main__':
    main()
