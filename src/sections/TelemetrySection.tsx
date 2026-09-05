import type { IncidentContent, TelemetryData, TelLap } from '../data/types';
import { Activity } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  ReferenceArea, CartesianGrid,
} from 'recharts';

/** 测量容器宽度；测不到（如隐藏视口）时用 960 兜底，保证图表始终渲染 */
function useContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const measure = () => setW(ref.current?.clientWidth ?? 0);
    measure();
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 1200);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', measure);
    };
  }, []);
  return { ref, width: w || 960 };
}

function interp(lap: TelLap, d: number, key: 'speed' | 'brake'): number | null {
  const { dist } = lap;
  if (d < dist[0] || d > dist[dist.length - 1]) return null;
  let i = 0;
  while (i < dist.length - 1 && dist[i + 1] < d) i++;
  const d0 = dist[i], d1 = dist[i + 1] ?? d0;
  const v0 = lap[key][i], v1 = lap[key][i + 1] ?? v0;
  const t = d1 === d0 ? 0 : (d - d0) / (d1 - d0);
  return v0 + (v1 - v0) * t;
}

const tooltipStyle = {
  backgroundColor: '#15181f',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 8,
  fontSize: 12,
};

export default function TelemetrySection({
  incident,
  data,
}: {
  incident: IncidentContent;
  data: TelemetryData;
}) {
  const A = incident.drivers.a;
  const B = incident.drivers.b;
  const nameA = incident.driverNames[A] ?? A;
  const nameB = incident.driverNames[B] ?? B;
  const colorA = incident.colors.a;
  const colorB = incident.colors.b;
  const notes = incident.telemetryNotes;
  const chart1 = useContainerWidth();
  const chart2 = useContainerWidth();
  const incidentLap = data.meta?.incidentLap ?? Math.max(...data.lapTimes.map((x) => x.lap)) - 2;

  // 图 1：圈速对比
  const [lapLo, lapHi] = notes?.lapWindow ?? [Math.max(1, incidentLap - 14), incidentLap];
  const lapRows: Record<string, number | null>[] = [];
  for (let lap = lapLo; lap <= lapHi; lap++) {
    const row: Record<string, number | null> = { lap };
    for (const drv of [A, B]) {
      const e = data.lapTimes.find((x) => x.driver === drv && x.lap === lap);
      row[drv] = e?.time ?? null;
    }
    lapRows.push(row);
  }
  const allTimes = data.lapTimes.map((x) => x.time).filter((t): t is number => t !== null);
  const tMin = Math.floor(Math.min(...allTimes)) - 1;
  const tMax = Math.ceil(Math.max(...allTimes)) + 3;

  // 图 2：事故圈弯道区段
  const lapA = data.telemetry[A]?.find((l) => l.lap === incidentLap)
    ?? data.telemetry[A]?.[data.telemetry[A].length - 1];
  const lapB = data.telemetry[B]?.find((l) => l.lap === incidentLap)
    ?? data.telemetry[B]?.[data.telemetry[B].length - 1];
  const win = notes?.window ?? [0, 4500];
  const zoneRows: {
    dist: number; Aspeed: number | null; Bspeed: number | null;
    Abrake: number | null; Bbrake: number | null;
  }[] = [];
  if (lapA || lapB) {
    for (let d = win[0]; d <= win[1]; d += 8) {
      zoneRows.push({
        dist: Math.round(d),
        Aspeed: lapA ? interp(lapA, d, 'speed') : null,
        Bspeed: lapB ? interp(lapB, d, 'speed') : null,
        Abrake: lapA ? interp(lapA, d, 'brake') : null,
        Bbrake: lapB ? interp(lapB, d, 'brake') : null,
      });
    }
    for (const r of zoneRows) {
      r.Abrake = r.Abrake === null ? null : Math.round(r.Abrake) * 100;
      r.Bbrake = r.Bbrake === null ? null : Math.round(r.Bbrake) * 100;
    }
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6 text-[#E10600]" />
          <h2 className="text-3xl font-bold text-white">铁证面板 · 真实遥测</h2>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-zinc-400">
          数据来自 FastF1（F1 官方计时与车载数据）。不看任何一方的嘴，只看两台车自己"说"了什么。
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6">
          <h3 className="text-sm font-semibold text-white">
            圈速对比 · 第 {lapLo}–{lapHi} 圈
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            事故发生在第 {incidentLap} 圈（图中红区）。圈速的同步暴涨通常意味着碰撞/爆胎/进站。
          </p>
          <div className="mt-4 h-72" ref={chart1.ref}>
            <LineChart width={chart1.width} height={288} data={lapRows} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="lap" tick={{ fill: '#9BA0A6', fontSize: 11 }} tickFormatter={(v) => `L${v}`} />
              <YAxis domain={[tMin, tMax]} tick={{ fill: '#9BA0A6', fontSize: 11 }} tickFormatter={(v) => `${v}s`} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelFormatter={(v) => `第 ${v} 圈`}
                formatter={((v: any, name: any) => [v == null ? '—' : `${Number(v).toFixed(3)}s`, name]) as any}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <ReferenceArea x1={incidentLap} x2={incidentLap} stroke="none" fill="#E10600" fillOpacity={0.12} label={{ value: '事故圈', fill: '#FF6B66', fontSize: 11, position: 'insideTop' }} />
              <Line type="monotone" dataKey={A} stroke={colorA} strokeWidth={2.5} dot={{ r: 3 }} name={`${nameA} ${A}`} connectNulls />
              <Line type="monotone" dataKey={B} stroke={colorB} strokeWidth={2.5} dot={{ r: 3 }} name={`${nameB} ${B}`} connectNulls />
            </LineChart>
          </div>
        </div>

        {zoneRows.length > 0 && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-sm font-semibold text-white">
              第 {lapA?.lap ?? lapB?.lap} 圈 · {notes?.zoneLabel ?? '事故区段'}放大
            </h3>
            {notes?.narrative && (
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{notes.narrative}</p>
            )}
            <div className="mt-4 h-80" ref={chart2.ref}>
              <LineChart width={chart2.width} height={320} data={zoneRows} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="dist" tick={{ fill: '#9BA0A6', fontSize: 11 }} tickFormatter={(v) => `${v}m`} />
                <YAxis yAxisId="spd" tick={{ fill: '#9BA0A6', fontSize: 11 }} />
                <YAxis yAxisId="brk" orientation="right" domain={[0, 100]} hide />
                <Tooltip
                  contentStyle={tooltipStyle}
                  labelFormatter={(v) => `赛道 ${v} 米处`}
                  formatter={((v: any, name: any) => {
                    if (String(name).includes('刹车')) return [v != null && v > 50 ? '刹车中' : '未刹车', name];
                    return [v == null ? '—' : `${v} km/h`, name];
                  }) as any}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                {notes?.contactZone && (
                  <ReferenceArea
                    yAxisId="spd" x1={notes.contactZone[0]} x2={notes.contactZone[1]}
                    fill="#E10600" fillOpacity={0.15} stroke="none"
                    label={{ value: '接触区', fill: '#FF6B66', fontSize: 11, position: 'insideTop' }}
                  />
                )}
                <Line yAxisId="spd" type="monotone" dataKey="Aspeed" stroke={colorA} strokeWidth={2.5} dot={false} name={`${nameA} 车速`} connectNulls />
                <Line yAxisId="spd" type="monotone" dataKey="Bspeed" stroke={colorB} strokeWidth={2.5} dot={false} name={`${nameB} 车速`} connectNulls />
                <Line yAxisId="brk" type="stepAfter" dataKey="Abrake" stroke={colorA} strokeOpacity={0.35} strokeDasharray="4 4" dot={false} name={`${nameA} 刹车`} connectNulls />
                <Line yAxisId="brk" type="stepAfter" dataKey="Bbrake" stroke={colorB} strokeOpacity={0.35} strokeDasharray="4 4" dot={false} name={`${nameB} 刹车`} connectNulls />
              </LineChart>
            </div>
            {notes?.caveat && (
              <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">注：{notes.caveat}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
