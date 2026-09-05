import type { FiaDecision } from '../data/types';
import { FileText, ExternalLink, Gavel, Languages } from 'lucide-react';

export default function EvidenceSection({ decision }: { decision?: FiaDecision }) {
  if (!decision) return null;
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center gap-3">
        <Gavel className="h-6 w-6 text-[#E10600]" />
        <h2 className="text-3xl font-bold text-white">铁证面板 · FIA 官方判决书</h2>
      </div>
      <p className="mt-2 text-sm text-zinc-400">{decision.docName}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <FileText className="h-4 w-4" /> 裁决原文（英文）
          </div>
          <blockquote className="mt-4 border-l-2 border-[#E10600] pl-4 text-sm italic leading-relaxed text-zinc-300">
            {decision.original}
          </blockquote>
          <div className="mt-5 space-y-1.5">
            {decision.sources.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-white"
              >
                <ExternalLink className="h-3 w-3" /> {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#E10600]/30 bg-[#E10600]/5 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#FF6B66]">
            <Languages className="h-4 w-4" /> 大白话翻译
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-200">{decision.plain}</p>
          <ul className="mt-4 space-y-3">
            {decision.rules.map((r, i) => (
              <li key={i} className="flex gap-2 text-xs leading-relaxed text-zinc-400">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E10600]" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
