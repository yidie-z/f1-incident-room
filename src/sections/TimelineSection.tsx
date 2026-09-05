import { useState } from 'react';
import type { IncidentContent, Statement, Camp } from '../data/types';
import { phaseLabels } from '../data/types';
import { ExternalLink, Quote, Radio, Flag, Users, MessageSquare, Snowflake } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const phaseIcons = {
  pre: Flag,
  incident: Radio,
  immediate: MessageSquare,
  team: Users,
  cooldown: Snowflake,
} as const;

const phases = ['pre', 'incident', 'immediate', 'team', 'cooldown'] as const;

function campColor(incident: IncidentContent, camp: Camp): string {
  if (camp === 'a') return incident.colors.a;
  if (camp === 'b') return incident.colors.b;
  if (camp === 'fia') return '#E10600';
  return '#9BA0A6';
}

function campBorder(camp: Camp): string {
  if (camp === 'fia') return 'border-[#E10600]/40';
  if (camp === 'neutral') return 'border-zinc-500/40';
  return 'border-white/15';
}

function StatementCard({ s, incident }: { s: Statement; incident: IncidentContent }) {
  const color = campColor(incident, s.camp);
  return (
    <article className={cn('rounded-xl border bg-white/[0.03] p-5 backdrop-blur', campBorder(s.camp))}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
        <span className="font-semibold text-white">{s.speaker}</span>
        <span className="text-xs text-zinc-500">{s.role}</span>
        <Badge variant="outline" className="ml-auto border-white/15 text-xs text-zinc-400">
          {s.tone}
        </Badge>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200">{s.zh}</p>
      {s.quote && (
        <div className="mt-3 flex gap-2 rounded-lg bg-black/40 p-3">
          <Quote className="h-4 w-4 shrink-0 text-zinc-600" />
          <p className="text-xs italic leading-relaxed text-zinc-400">{s.quote}</p>
        </div>
      )}
      <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
        <span>{s.when}</span>
        <a
          href={s.source.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-zinc-400 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          来源：{s.source.label} · {s.source.date}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

export default function TimelineSection({ incident }: { incident: IncidentContent }) {
  const [campFilter, setCampFilter] = useState<'all' | 'a' | 'b'>('all');
  const { statements } = incident;

  const visible = (s: Statement) =>
    campFilter === 'all' ? true : s.camp === campFilter || s.camp === 'neutral' || s.camp === 'fia';

  if (statements.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white">事件时间轴</h2>
        <div className="mt-8 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 p-8 text-center text-sm text-amber-300/80">
          本页由生成器自动产出骨架——双方发言、车队表态、专家分析尚待人工补充
          （编辑 content.ts，每条发言附原始来源链接）。
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">事件时间轴</h2>
          <p className="mt-2 text-sm text-zinc-400">
            从事发前的火药味，到几天后的二次表态——按时间顺序看双方的每一句话。
          </p>
        </div>
        <div className="flex gap-2">
          {(
            [
              ['all', '全部视角'],
              ['a', `只看${incident.campNames.a.split('/')[0].trim()}`],
              ['b', `只看${incident.campNames.b.split('/')[0].trim()}`],
            ] as const
          ).map(([v, label]) => (
            <button
              key={v}
              onClick={() => setCampFilter(v)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs transition-colors',
                campFilter === v
                  ? 'border-white bg-white text-black'
                  : 'border-white/20 text-zinc-400 hover:border-white/50 hover:text-white',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-12">
        {phases.map((phase) => {
          const list = statements.filter((s) => s.phase === phase && visible(s));
          if (list.length === 0) return null;
          const Icon = phaseIcons[phase];
          const meta = phaseLabels[phase];
          return (
            <div key={phase} className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Icon className="h-4 w-4 text-zinc-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{meta.label}</h3>
                  <p className="text-xs text-zinc-500">{meta.desc}</p>
                </div>
              </div>
              <div className="ml-[18px] mt-5 space-y-4 border-l border-white/10 pl-8">
                {list.map((s) => (
                  <StatementCard key={s.id} s={s} incident={incident} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
