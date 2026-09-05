#!/usr/bin/env python3
"""
F1 Incident Room · 事件生成器（手动挡）

用法：
    python tools/generate_incident.py --year 2021 --gp "Great Britain" --drivers HAM VER
    python tools/generate_incident.py --year 2024 --gp Austria --drivers NOR VER --lap 64

参数：
    --year      赛季年份
    --gp        分站名（FastF1 识别的名字，如 "Austria" / "Great Britain" / 站序号）
    --drivers   两位车手代码，前者视为"挑战/受损方 A"，后者为"防守/获益方 B"
    --lap       （可选）手动指定事故圈；不填则自动侦测
    --session   （可选）场次，默认 R（正赛）
    --slug      （可选）输出目录名；默认自动生成如 gbr2021-ham-ver

输出（写入 app/src/data/incidents/<slug>/）：
    telemetry.json  真实遥测 + 圈速数据
    content.ts      页面内容骨架（发言引语留空，人工补充后把 complete 改为 true）
并自动重建 app/src/data/incidents/index.ts 注册表。
"""
import argparse
import datetime
import json
import sys
from pathlib import Path

APP_DIR = Path(__file__).resolve().parent.parent
INCIDENTS_DIR = APP_DIR / 'src' / 'data' / 'incidents'
CACHE_DIR = APP_DIR.parent / 'data_cache'

# ---- 输入别名解析：分站名支持中文/英文/赛道名，车手支持全名/中文/三字母代码 ----

GP_ALIASES = {
    'Australian Grand Prix': ['澳大利亚', '墨尔本', 'australia', 'melbourne', 'albert park', '阿尔伯特公园'],
    'Chinese Grand Prix': ['中国', '上海', 'china', 'shanghai'],
    'Japanese Grand Prix': ['日本', '铃鹿', 'japan', 'suzuka'],
    'Bahrain Grand Prix': ['巴林', '萨基尔', 'bahrain', 'sakhir'],
    'Saudi Arabian Grand Prix': ['沙特', '吉达', 'saudi', 'jeddah'],
    'Miami Grand Prix': ['迈阿密', 'miami'],
    'Emilia Romagna Grand Prix': ['伊莫拉', '艾米利亚', 'emilia', 'imola'],
    'Monaco Grand Prix': ['摩纳哥', 'monaco', '蒙特卡洛'],
    'Spanish Grand Prix': ['西班牙', '巴塞罗那', 'spain', 'barcelona', '加泰罗尼亚', 'catalunya'],
    'Canadian Grand Prix': ['加拿大', '蒙特利尔', 'canada', 'montreal'],
    'Austrian Grand Prix': ['奥地利', '红牛环', 'austria', 'spielberg', 'red bull ring', '施皮尔贝格'],
    'British Grand Prix': ['英国', '银石', 'britain', 'british', 'silverstone', 'uk'],
    'Hungarian Grand Prix': ['匈牙利', '布达佩斯', 'hungary', 'hungarian', 'hungray', 'budapest', 'hungaroring'],
    'Belgian Grand Prix': ['比利时', '斯帕', 'belgium', 'spa'],
    'Dutch Grand Prix': ['荷兰', '赞德沃特', 'dutch', 'zandvoort', 'netherlands'],
    'Italian Grand Prix': ['意大利', '蒙扎', 'italy', 'italian', 'monza'],
    'Azerbaijan Grand Prix': ['阿塞拜疆', '巴库', 'azerbaijan', 'baku'],
    'Singapore Grand Prix': ['新加坡', 'singapore', '滨海湾'],
    'United States Grand Prix': ['美国', '奥斯汀', 'austin', 'usa', 'cota', '美洲赛道'],
    'Mexico City Grand Prix': ['墨西哥', 'mexico'],
    'São Paulo Grand Prix': ['巴西', '圣保罗', '英特拉戈斯', 'brazil', 'sao paulo', 'interlagos'],
    'Las Vegas Grand Prix': ['拉斯维加斯', 'las vegas', 'vegas'],
    'Qatar Grand Prix': ['卡塔尔', '罗塞尔', 'qatar', 'lusail', 'losail'],
    'Abu Dhabi Grand Prix': ['阿布扎比', '亚斯', 'abu dhabi', 'yas'],
    'Styrian Grand Prix': ['施蒂利亚', 'styria'],
    'French Grand Prix': ['法国', 'france', 'paul ricard', '保罗里卡尔'],
    'Portuguese Grand Prix': ['葡萄牙', 'portugal', 'portimao', '波尔蒂芒'],
    'Turkish Grand Prix': ['土耳其', 'turkey', 'istanbul', '伊斯坦布尔'],
    'Russian Grand Prix': ['俄罗斯', '索契', 'russia', 'sochi'],
    'Tuscan Grand Prix': ['托斯卡纳', '穆杰罗', 'tuscany', 'mugello'],
    'Eifel Grand Prix': ['艾费尔', '纽博格林', 'eifel', 'nurburgring'],
}

# 2016–2026 赛季全部正赛车手：三字母代码 / 英文全名 / F1 官方中文名（参照 F1 官方微博译名）。
# 解析逻辑见 resolve_driver：代码精确匹配；全名、姓氏、中文名支持包含匹配。
DRIVER_ALIASES = {
    # —— 现役 / 近年主力 ——
    'VER': ['max verstappen', 'verstappen', '马克斯·维斯塔潘', '维斯塔潘'],
    'HAM': ['lewis hamilton', 'hamilton', '刘易斯·汉密尔顿', '汉密尔顿'],
    'NOR': ['lando norris', 'norris', '兰多·诺里斯', '诺里斯'],
    'PIA': ['oscar piastri', 'piastri', '奥斯卡·皮亚斯特里', '皮亚斯特里'],
    'LEC': ['charles leclerc', 'leclerc', '夏尔·勒克莱尔', '勒克莱尔'],
    'RUS': ['george russell', 'russell', '乔治·拉塞尔', '拉塞尔'],
    'SAI': ['carlos sainz', 'sainz', '卡洛斯·塞恩斯', '塞恩斯'],
    'ALO': ['fernando alonso', 'alonso', '费尔南多·阿隆索', '阿隆索'],
    'ANT': ['andrea kimi antonelli', 'antonelli', '安德烈亚·基米·安东内利', '安东内利'],
    'STR': ['lance stroll', 'stroll', '兰斯·斯特罗尔', '斯特罗尔'],
    'GAS': ['pierre gasly', 'gasly', '皮埃尔·加斯利', '加斯利'],
    'OCO': ['esteban ocon', 'ocon', '埃斯特班·奥康', '奥康'],
    'ALB': ['alexander albon', 'alex albon', 'albon', '亚历山大·阿尔本', '阿尔本'],
    'TSU': ['yuki tsunoda', 'tsunoda', '角田裕毅', '角田'],
    'HUL': ['nico hulkenberg', 'nico hülkenberg', 'hulkenberg', 'hülkenberg', '尼科·霍肯伯格', '霍肯伯格'],
    'LAW': ['liam lawson', 'lawson', '利亚姆·劳森', '劳森'],
    'BEA': ['oliver bearman', 'ollie bearman', 'bearman', '奥利弗·贝尔曼', '贝尔曼'],
    'HAD': ['isack hadjar', 'hadjar', '伊萨克·哈贾尔', '哈贾尔'],
    'BOR': ['gabriel bortoleto', 'bortoleto', '加布里埃尔·博托莱托', '博托莱托'],
    'LIN': ['arvid lindblad', 'lindblad', '阿维德·林德布拉德', '林德布拉德'],
    'COL': ['franco colapinto', 'colapinto', '弗兰科·科拉平托', '科拉平托'],
    'PER': ['sergio perez', 'sergio pérez', 'perez', 'pérez', '塞尔吉奥·佩雷兹', '佩雷兹'],
    'BOT': ['valtteri bottas', 'bottas', '瓦尔特里·博塔斯', '博塔斯'],
    # —— 2016–2024 退役 / 离队车手 ——
    'VET': ['sebastian vettel', 'vettel', '塞巴斯蒂安·维特尔', '维特尔'],
    'RIC': ['daniel ricciardo', 'ricciardo', '丹尼尔·里卡多', '里卡多'],
    'RAI': ['kimi raikkonen', 'kimi räikkönen', 'raikkonen', 'räikkönen', '基米·莱科宁', '莱科宁'],
    'MAG': ['kevin magnussen', 'magnussen', '凯文·马格努森', '马格努森'],
    'ZHO': ['guanyu zhou', 'zhou guanyu', '周冠宇'],
    'GRO': ['romain grosjean', 'grosjean', '罗曼·格罗斯让', '格罗斯让'],
    'KVY': ['daniil kvyat', 'kvyat', '丹尼尔·科维亚特', '科维亚特'],
    'GIO': ['antonio giovinazzi', 'giovinazzi', '安东尼奥·乔维纳齐', '乔维纳齐'],
    'MSC': ['mick schumacher', 'schumacher', '米克·舒马赫'],
    'MAZ': ['nikita mazepin', 'mazepin', '尼基塔·马泽平', '马泽平'],
    'LAT': ['nicholas latifi', 'latifi', '尼古拉斯·拉提菲', '拉提菲'],
    'DEV': ['nyck de vries', 'de vries', '尼克·德弗里斯', '德弗里斯'],
    'SAR': ['logan sargeant', 'sargeant', '洛根·萨金特', '萨金特'],
    'DOO': ['jack doohan', 'doohan', '杰克·杜汉', '杜汉'],
    'ROS': ['nico rosberg', 'rosberg', '尼科·罗斯伯格', '罗斯伯格'],
    'BUT': ['jenson button', 'button', '简森·巴顿', '巴顿'],
    'MAS': ['felipe massa', 'massa', '费利佩·马萨', '马萨'],
    'KUB': ['robert kubica', 'kubica', '罗伯特·库比卡', '库比卡'],
    'SIR': ['sergey sirotkin', 'sirotkin', '谢尔盖·西罗特金', '西罗特金'],
    'VAN': ['stoffel vandoorne', 'vandoorne', '斯托菲尔·范多恩', '范多恩'],
    'HAR': ['brendon hartley', 'hartley', '布兰登·哈特利', '哈特利',
            'rio haryanto', 'haryanto', '里奥·哈里恩托', '哈里恩托'],  # 两人代码均为 HAR，按会话区分
    'PAL': ['jolyon palmer', 'palmer', '乔利恩·帕尔默', '帕尔默'],
    'WEH': ['pascal wehrlein', 'wehrlein', '帕斯卡·维尔莱茵', '维尔莱茵'],
    'ERI': ['marcus ericsson', 'ericsson', '马库斯·埃里克森', '埃里克森'],
    'NAS': ['felipe nasr', 'nasr', '费利佩·纳斯尔', '纳斯尔'],
    'GUT': ['esteban gutierrez', 'esteban gutiérrez', 'gutierrez', 'gutiérrez', '埃斯特班·古铁雷斯', '古铁雷斯'],
    'FIT': ['pietro fittipaldi', 'fittipaldi', '彼得罗·菲蒂帕尔迪', '菲蒂帕尔迪'],
}


def resolve_gp(raw: str) -> str:
    """分站名：数字直接当年份分站序号；否则按别名（中/英/赛道名）解析。"""
    raw = raw.strip()
    if raw.isdigit():
        return raw
    low = raw.lower()
    for official, aliases in GP_ALIASES.items():
        names = [official.lower()] + [a.lower() for a in aliases]
        for n in names:
            if n.isascii() and len(n) < 3 and low != n:
                continue
            if low == n or low in n or n in low:
                return official
    return raw  # 查不到就原样交给 FastF1（它支持官方英文名的模糊匹配）


def resolve_driver(raw: str) -> str:
    """车手：ASCII 三字母代码直接使用；全名/中文名按别名解析。"""
    raw = raw.strip()
    if len(raw) == 3 and raw.isascii() and raw.isalpha():
        return raw.upper()
    low = raw.lower()
    for code, aliases in DRIVER_ALIASES.items():
        for a in aliases:
            al = a.lower()
            if a.isascii() and len(a) < 3 and low != al:
                continue  # 过短的英文别名只接受精确匹配（如 max）
            if low == al or al in low or low in al:
                return code
    print(f'  [警告] 未识别的车手名 "{raw}"，按大写代码处理', file=sys.stderr)
    return raw.upper()


def load_session(year: int, gp: str, session_type: str):
    import fastf1
    fastf1.Cache.enable_cache(str(CACHE_DIR))
    try:
        gp_key = int(gp)
    except ValueError:
        gp_key = gp
    s = fastf1.get_session(year, gp_key, session_type)
    s.load(telemetry=True, laps=True, weather=False, messages=False)
    return s


def detect_incident_lap(laps_by_driver: dict) -> tuple[int, list[str]]:
    """自动侦测事故圈：找圈速暴降、名次骤降、或提前退赛的车手。"""
    reasons = []
    candidates = []

    for drv, laps in laps_by_driver.items():
        valid = laps['LapTime'].dropna()
        if valid.empty:
            continue
        times = valid.dt.total_seconds()
        median = times.median()

        # 1) 圈速比个人中位数慢 12 秒以上（双车同圈暴慢 → 碰撞圈）
        for _, l in laps.iterrows():
            lt = l['LapTime']
            if lt != lt:  # NaT
                continue
            sec = lt.total_seconds()
            if sec > median + 12:
                candidates.append((int(l['LapNumber']), f'{drv} 第 {int(l["LapNumber"])} 圈圈速 {sec:.1f}s，比中位数慢 {sec - median:.1f}s'))

        # 2) 名次单圈掉 4 位以上
        pos = laps[['LapNumber', 'Position']].dropna()
        pos = pos.sort_values('LapNumber')
        prev = None
        for _, r in pos.iterrows():
            if prev is not None and r['Position'] - prev >= 4:
                candidates.append((int(r['LapNumber']), f'{drv} 第 {int(r["LapNumber"])} 圈名次 {int(prev)} → {int(r["Position"])}'))
            prev = r['Position']

        # 3) 提前退赛：有车手完赛圈数远少于比赛总圈数
    total_laps = max(int(l['LapNumber'].max()) for l in laps_by_driver.values() if len(l))
    for drv, laps in laps_by_driver.items():
        if len(laps) == 0:
            continue
        last = int(laps['LapNumber'].max())
        if last < total_laps - 5:
            candidates.append((last, f'{drv} 在第 {last} 圈后没有更多计时圈（退赛）'))

    if not candidates:
        raise SystemExit('未能自动侦测到事故圈，请用 --lap 手动指定。')

    # 投票：同一圈出现多个信号者优先，其次取最晚的候选圈
    from collections import Counter
    votes = Counter(lap for lap, _ in candidates)
    top = sorted(votes.items(), key=lambda kv: (kv[1], kv[0]), reverse=True)
    chosen = top[0][0]
    reasons = [f'第 {lap} 圈 ×{n} 个信号' for lap, n in top[:3]]
    return chosen, reasons


def export_data(session, drivers: tuple[str, str], incident_lap: int) -> dict:
    out = {'lapTimes': [], 'telemetry': {}}
    laps_by_driver = {}
    for drv in drivers:
        laps = session.laps.pick_drivers(drv)
        laps_by_driver[drv] = laps
        lo = max(1, incident_lap - 14)
        hi = incident_lap + 2
        for _, l in laps.iterrows():
            n = l['LapNumber']
            if not (lo <= n <= hi):
                continue
            lt = l['LapTime']
            try:
                sec = round(lt.total_seconds(), 3) if lt == lt else None
            except Exception:
                sec = None
            tl = l['TyreLife']
            ps = l['Position']
            out['lapTimes'].append({
                'driver': drv, 'lap': int(n), 'time': sec,
                'compound': l['Compound'] if isinstance(l['Compound'], str) else 'UNKNOWN',
                'tyreLife': int(tl) if tl == tl else None,
                'position': int(ps) if ps == ps else None,
            })

        tel_all = []
        for ln in range(max(1, incident_lap - 4), incident_lap + 1):
            try:
                lap = laps.pick_laps(ln)
                if len(lap) == 0:
                    continue
                t = lap.iloc[0].get_car_data().add_distance()
                t = t[t['Distance'] % 15 < 3]
                if len(t) < 10:
                    continue
                tel_all.append({
                    'lap': int(ln),
                    'dist': [round(float(x), 1) for x in t['Distance']],
                    'speed': [int(x) for x in t['Speed']],
                    'throttle': [int(x) for x in t['Throttle']],
                    'brake': [int(x) for x in t['Brake']],
                    'gear': [int(x) for x in t['nGear']],
                    'drs': [int(x) for x in t['DRS']],
                })
            except Exception as e:
                print(f'  [警告] {drv} 第 {ln} 圈遥测缺失：{e}', file=sys.stderr)
        out['telemetry'][drv] = tel_all
    return out, laps_by_driver


def estimate_zone(tel: dict, drivers: tuple[str, str], incident_lap: int):
    """估算图表窗口与接触区。

    优先策略：撞停型事故找"速度永久崩塌点"（跌破 40 km/h 且此后再未回到 100 以上）；
    否则退化为事故圈最低速点（排除起步区前 300m）；再退化为首个大幅减速点。
    """
    for drv in drivers:
        laps = tel['telemetry'].get(drv, [])
        lap = next((l for l in laps if l['lap'] == incident_lap), None)
        if not lap:
            continue
        d_min = None
        # 1) 永久崩塌（撞车后停在缓冲区/被吊走）
        for i, (dd, s) in enumerate(zip(lap['dist'], lap['speed'])):
            if dd > 600 and s < 40 and max(lap['speed'][i:]) < 100:
                d_min = dd
                break
        # 2) 全场最低速（排除起步区）
        if d_min is None:
            pts = [(d, s) for d, s in zip(lap['dist'], lap['speed']) if d > 300]
            if not pts:
                continue
            d_min = min(pts, key=lambda p: p[1])[0]
        # 3) 若最低速出现在末段（爆胎爬行），改取第一个显著减速点
        if d_min > lap['dist'][-1] - 800:
            for i in range(1, len(lap['dist'])):
                if lap['dist'][i] > 300 and lap['speed'][i] < lap['speed'][i - 1] - 60:
                    d_min = lap['dist'][i]
                    break
        center = round(d_min, -1)
        window = [max(0, int(center - 400)), int(center + 500)]
        zone = [max(0, int(center - 60)), int(center + 60)]
        return window, zone, drv
    return None, None, None


CONTENT_TEMPLATE = '''import type {{ IncidentContent }} from '../../types';

// 由 generate_incident.py 于 {date} 生成（{year} {gp}，事故圈：第 {lap} 圈{detect_note}）
// TODO: 补充双方发言（statements / expertViews / fiaDecision），
//       每条必须附原始来源链接。补完后把 complete 改为 true。
export const content: IncidentContent = {{
  slug: '{slug}',
  title: 'TODO: 一句话标题',
  event: '{year} {gp} 大奖赛 · 正赛第 {lap} 圈',
  place: 'TODO: 赛道 · 城市',
  date: 'TODO: 日期',
  verdict: 'TODO: FIA 干事裁决一句话版（责任认定 + 处罚）',
  drivers: {{ a: '{a}', b: '{b}' }},
  driverNames: {{ {a}: 'TODO', {b}: 'TODO' }},
  colors: {{ a: '#FF8000', b: '#3671C6' }},  // TODO: 改为两队车队色
  campNames: {{ a: 'TODO: A 阵营', b: 'TODO: B 阵营' }},
  statements: [],
  expertViews: [],
  telemetryNotes: {{
    zoneLabel: 'TODO: 事故弯角（如 "9 号弯 Copse"）',
    window: [{w0}, {w1}],
    {zone_line}
    lapWindow: [{lw0}, {lw1}],
    narrative: 'TODO: 用遥测讲一遍事故经过（图表下方解读）',
    caveat: '遥测为公开计时数据插值，不含方向盘转角，无法单独裁定"刹车区变线"类争论。',
  }},
  complete: false,
}};
'''


def rebuild_index():
    """扫描 incidents 目录，重建注册表 index.ts。"""
    entries = []
    for d in sorted(INCIDENTS_DIR.iterdir()):
        if d.is_dir() and (d / 'content.ts').exists() and (d / 'telemetry.json').exists():
            entries.append(d.name)
    lines = [
        '// 本文件由 tools/generate_incident.py 自动重建，请勿手改',
        "import type { IncidentContent, TelemetryData } from '../types';",
        '',
    ]
    for i, slug in enumerate(entries):
        lines.append(f"import {{ content as c{i} }} from './{slug}/content';")
        lines.append(f"import t{i} from './{slug}/telemetry.json';")
    lines.append('')
    lines.append('export const incidents: { content: IncidentContent; telemetry: TelemetryData }[] = [')
    for i, slug in enumerate(entries):
        lines.append(f'  {{ content: c{i}, telemetry: t{i} as unknown as TelemetryData }},')
    lines.append('];')
    lines.append('')
    lines.append('export function getIncident(slug: string) {')
    lines.append('  return incidents.find((x) => x.content.slug === slug);')
    lines.append('}')
    (INCIDENTS_DIR / 'index.ts').write_text('\n'.join(lines) + '\n', encoding='utf-8')
    return entries


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--year', type=int, required=True)
    p.add_argument('--gp', required=True)
    p.add_argument('--drivers', nargs=2, required=True, metavar=('A', 'B'))
    p.add_argument('--lap', type=int, default=None)
    p.add_argument('--session', default='R')
    p.add_argument('--slug', default=None)
    args = p.parse_args()

    gp_resolved = resolve_gp(args.gp)
    a, b = resolve_driver(args.drivers[0]), resolve_driver(args.drivers[1])
    print(f'解析：分站 "{args.gp}" → {gp_resolved}；车手 {args.drivers[0]} → {a}，{args.drivers[1]} → {b}')
    print(f'加载 {args.year} {gp_resolved} {args.session} ...')
    session = load_session(args.year, gp_resolved, args.session)

    try:
        total_laps = len(session.laps)
    except Exception:
        total_laps = 0
    if total_laps == 0:
        raise SystemExit(
            f'这场比赛没有可用的官方计时数据：FastF1 数据源只覆盖 2018 赛季至今'
            f'（{args.year} 年无法获取圈速/遥测）。请换 2018 年或之后的分站。'
        )

    laps_by_driver = {d: session.laps.pick_drivers(d) for d in (a, b)}
    for d in (a, b):
        if len(laps_by_driver[d]) == 0:
            raise SystemExit(f'没有车手 {d} 的数据，检查车手代码。')

    detect_note = ''
    if args.lap:
        incident_lap = args.lap
        detect_note = '，手动指定'
    else:
        incident_lap, reasons = detect_incident_lap(laps_by_driver)
        detect_note = f'，自动侦测：{"；".join(reasons)}'
    print(f'事故圈：第 {incident_lap} 圈{detect_note}')

    data, _ = export_data(session, (a, b), incident_lap)
    window, zone, zone_drv = estimate_zone(data, (a, b), incident_lap)
    if window is None:
        # 两车都没有事故圈遥测（例如首圈撞退）：退而用前一圈的窗口
        for prev in (incident_lap - 1,):
            data['telemetry'] = data['telemetry']
            window, zone, zone_drv = estimate_zone(
                {'telemetry': {d: [l for l in v if l['lap'] == prev] for d, v in data['telemetry'].items()}},
                (a, b), prev)
        if window is None:
            window, zone = [0, 4500], None
            print('  [警告] 无法估算接触区，请手工填写 telemetryNotes.window/contactZone', file=sys.stderr)

    slug = args.slug or f"{''.join(x for x in gp_resolved.lower() if x.isascii() and x.isalnum())[:6]}{args.year}-{a.lower()}-{b.lower()}"
    out_dir = INCIDENTS_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    data['meta'] = {
        'year': args.year, 'gp': str(gp_resolved), 'incidentLap': incident_lap,
        'detectedAt': datetime.date.today().isoformat(),
    }
    (out_dir / 'telemetry.json').write_text(json.dumps(data, ensure_ascii=False), encoding='utf-8')

    if not (out_dir / 'content.ts').exists():
        lw0 = max(1, incident_lap - 14)
        content = CONTENT_TEMPLATE.format(
            date=datetime.date.today().isoformat(), year=args.year, gp=gp_resolved,
            lap=incident_lap, detect_note=detect_note, slug=slug, a=a, b=b,
            w0=window[0], w1=window[1],
            zone_line=f'contactZone: [{zone[0]}, {zone[1]}],' if zone else '// contactZone: [TODO, TODO],',
            lw0=lw0, lw1=incident_lap + 2,
        )
        (out_dir / 'content.ts').write_text(content, encoding='utf-8')
    else:
        print('  content.ts 已存在，未覆盖。')

    entries = rebuild_index()
    print(f'\n完成 → {out_dir}')
    print(f'注册表已重建（{len(entries)} 个事件：{", ".join(entries)}）')
    print('下一步：编辑 content.ts 补充发言引语（每条附来源链接），然后把 complete 改为 true。')


if __name__ == '__main__':
    main()
