import type { IncidentContent } from '../data/types';
import { Flag, MapPin, Calendar, Scale, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router';

export default function Hero({ incident }: { incident: IncidentContent }) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, #E10600 0 2px, transparent 2px 26px)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> 全部事件
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest text-zinc-400">
          <Badge variant="outline" className="border-[#E10600]/50 text-[#FF6B66]">
            F1 INCIDENT ROOM
          </Badge>
          {!incident.complete && (
            <Badge variant="outline" className="border-amber-500/50 text-amber-400">
              骨架页 · 发言内容待补充
            </Badge>
          )}
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {incident.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {incident.place}
          </span>
          <span className="inline-flex items-center gap-1">
            <Flag className="h-3.5 w-3.5" /> {incident.event}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
          {incident.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          {incident.driverNames[incident.drivers.b]} × {incident.driverNames[incident.drivers.a]}
          —— 同一场碰撞，两个阵营，两套叙事。每一句话都有来源。
        </p>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#E10600]/30 bg-[#E10600]/5 p-5">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-[#E10600]" />
          <div>
            <div className="text-sm font-semibold text-[#FF6B66]">FIA 干事裁决（一句话版）</div>
            <p className="mt-1 text-sm leading-relaxed text-zinc-300">{incident.verdict}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
