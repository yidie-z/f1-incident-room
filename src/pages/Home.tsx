import { useEffect, useState } from 'react';
import { incidents } from '../data/incidents';
import { Link } from 'react-router';
import { ChevronRight, Flag, MapPin, Calendar, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AddEventPanel from '../components/AddEventPanel';

/**
 * 探测生成接口是否可用：
 * 开发服务器上 GET /api/generate 返回 405 JSON（"POST only"）；
 * 静态单文件（file:// / Kimi 预览）则 fetch 失败或返回非 JSON。
 */
function useGeneratorApiAvailable(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    let alive = true;
    fetch('./api/generate')
      .then((r) => r.json())
      .then((d) => {
        if (alive) setOk(d?.error === 'POST only');
      })
      .catch(() => {
        if (alive) setOk(false);
      });
    return () => {
      alive = false;
    };
  }, []);
  return ok;
}

export default function Home() {
  const apiAvailable = useGeneratorApiAvailable();
  return (
    <div className="min-h-screen bg-[#0B0E14] font-sans text-zinc-100 antialiased">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, #E10600 0 2px, transparent 2px 26px)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <Badge variant="outline" className="border-[#E10600]/50 text-[#FF6B66]">
            F1 INCIDENT ROOM
          </Badge>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            同一场碰撞，<span style={{ color: '#E10600' }}>两种真相</span>。
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            针对 F1 赛场事件的多视角情报室：时间轴、阵营对峙、FIA 判决书通俗解读、FastF1
            真实遥测——每一句话都附原始来源。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {incidents.map(({ content }) => (
            <Link
              key={content.slug}
              to={`/i/${content.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-2">
                {!content.complete && (
                  <Badge variant="outline" className="border-amber-500/50 text-[10px] text-amber-400">
                    骨架 · 待补充
                  </Badge>
                )}
                <span className="ml-auto text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-white">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-white">{content.title}</h2>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1">
                  <Flag className="h-3.5 w-3.5" /> {content.event}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {content.place}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {content.date}
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-sm text-zinc-400">{content.verdict}</p>
              <div className="mt-4 flex gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold"
                  style={{ backgroundColor: content.colors.a, color: '#0B0E14' }}
                >
                  {content.drivers.a}
                </span>
                <span className="text-[10px] text-zinc-600">vs</span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold"
                  style={{ backgroundColor: content.colors.b, color: '#0B0E14' }}
                >
                  {content.drivers.b}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {apiAvailable ? (
          <AddEventPanel />
        ) : (
          <div className="mt-12 rounded-xl border border-white/10 bg-black/40 p-5 opacity-75">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
              <PlusCircle className="h-4 w-4 text-zinc-600" />
              生成新事件页（当前打开方式不可用）
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              本页面所有事件已打包在内，可随意浏览、断网可用。但「生成新事件」需要实时调用
              FastF1 官方计时数据 + Python 生成器，静态 HTML（双击打开或用 Kimi
              预览打开文件）做不到。想生成新事件：用 Kimi Work 的网页预览（localhost
              开发服务器）打开本项目，或在项目目录运行
              <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-zinc-300">npm run dev</code>
              ，首页底部的生成面板即可使用——当然也可以直接叫我来生成。
            </p>
          </div>
        )}
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs leading-relaxed text-zinc-600">
        F1 Incident Room · 原型。引语摘自公开报道并附来源链接；遥测来自 FastF1（F1
        官方计时数据）。不含任何 FOM 版权影像。
      </footer>
    </div>
  );
}
