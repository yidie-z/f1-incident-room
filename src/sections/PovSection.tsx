import type { IncidentContent, Statement, Camp } from '../data/types';
import { ExternalLink, Swords } from 'lucide-react';

interface Column {
  camp: Camp;
  title: string;
  subtitle: string;
  items: Statement[];
}

export default function PovSection({ incident }: { incident: IncidentContent }) {
  const protagonists = incident.statements.filter(
    (s) => s.camp === 'a' || s.camp === 'b',
  );
  const columns: Column[] = [
    {
      camp: 'a',
      title: `${incident.campNames.a.split('/')[0].trim()} · 视角`,
      subtitle: '这一阵营的控诉点与降温过程',
      items: protagonists.filter((s) => s.camp === 'a'),
    },
    {
      camp: 'b',
      title: `${incident.campNames.b.split('/')[0].trim()} · 视角`,
      subtitle: '这一阵营的辩护逻辑与后续表态',
      items: protagonists.filter((s) => s.camp === 'b'),
    },
    {
      camp: 'neutral',
      title: '中立 / 专家',
      subtitle: '第三方拆解：两边和干事，各有什么问题',
      items: incident.expertViews,
    },
  ];

  if (columns.every((c) => c.items.length === 0)) return null;

  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center gap-3">
          <Swords className="h-6 w-6 text-[#E10600]" />
          <h2 className="text-3xl font-bold text-white">阵营对峙</h2>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-zinc-400">
          同一场事故，三套叙事。左右两栏是两边的辩护与控诉，中间没有的"真相"，
          留给第三栏的专业分析去逼近。
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {columns.map((col) => {
            const color =
              col.camp === 'a' ? incident.colors.a : col.camp === 'b' ? incident.colors.b : '#9BA0A6';
            return (
              <div
                key={col.camp}
                className="rounded-2xl border p-5"
                style={{ borderColor: `${color}66`, backgroundColor: `${color}0D` }}
              >
                <div
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: color, color: '#0B0E14' }}
                >
                  {col.title}
                </div>
                <p className="mt-3 text-xs text-zinc-400">{col.subtitle}</p>
                <div className="mt-5 space-y-4">
                  {col.items.map((s) => (
                    <div key={s.id} className="rounded-xl border border-white/10 bg-black/40 p-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-semibold text-white">{s.speaker}</span>
                        <span className="shrink-0 text-[10px] text-zinc-500">{s.when}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300">{s.zh}</p>
                      <a
                        href={s.source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[11px] text-zinc-500 transition-colors hover:text-white"
                      >
                        {s.source.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
