import { useParams, Link } from 'react-router';
import { getIncident } from '../data/incidents';
import Hero from '../sections/Hero';
import TimelineSection from '../sections/TimelineSection';
import PovSection from '../sections/PovSection';
import EvidenceSection from '../sections/EvidenceSection';
import TelemetrySection from '../sections/TelemetrySection';

export default function IncidentPage() {
  const { slug } = useParams();
  const entry = slug ? getIncident(slug) : undefined;

  if (!entry) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B0E14] text-zinc-400">
        <p>没有找到这个事件。</p>
        <Link to="/" className="mt-4 text-sm text-white underline underline-offset-4">
          返回事件列表
        </Link>
      </div>
    );
  }

  const { content, telemetry } = entry;
  return (
    <div className="min-h-screen bg-[#0B0E14] font-sans text-zinc-100 antialiased">
      <Hero incident={content} />
      <main>
        <TimelineSection incident={content} />
        <PovSection incident={content} />
        <EvidenceSection decision={content.fiaDecision} />
        <TelemetrySection incident={content} data={telemetry} />
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs leading-relaxed text-zinc-600">
        F1 Incident Room · 原型演示。所有引语均摘自公开报道并附原始来源链接；遥测数据来自
        FastF1（F1 官方计时数据）。本站不含任何 FOM 版权影像，仅做文字引用与数据可视化。
      </footer>
    </div>
  );
}
