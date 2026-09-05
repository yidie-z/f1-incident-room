import { useState } from 'react';
import { useNavigate } from 'react-router';
import { PlusCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

export default function AddEventPanel() {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState('');
  const [gp, setGp] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [lap, setLap] = useState('');
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const submit = async () => {
    setBusy(true);
    setError(null);
    setLog(null);
    try {
      const res = await fetch('./api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: Number(year),
          gp: gp.trim(),
          a: a.trim(),
          b: b.trim(),
          lap: lap.trim() ? Number(lap) : undefined,
        }),
      });
      const data = await res.json();
      setLog(data.log ?? null);
      if (data.ok) {
        if (data.slug) {
          navigate(`/i/${data.slug}`);
        } else {
          window.location.reload();
        }
      } else {
        setError(data.error ?? '生成失败');
      }
    } catch (e) {
      setError(`请求失败：${e}（此功能只在开发服务器下可用）`);
    } finally {
      setBusy(false);
    }
  };

  const inputCls =
    'w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:border-white/40 focus:outline-none';

  return (
    <div className="mt-12 rounded-xl border border-white/10 bg-black/40 p-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 text-left text-sm font-semibold text-zinc-200"
      >
        <PlusCircle className="h-4 w-4 text-[#E10600]" />
        生成新事件页
        <span className="ml-auto text-zinc-600">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-xs leading-relaxed text-zinc-500">
            分站支持中文、英文、赛道名或分站序号（如 <code className="text-zinc-400">蒙扎</code> /{' '}
            <code className="text-zinc-400">Silverstone</code> / <code className="text-zinc-400">10</code>）；
            车手支持三字母代码、英文全名或中文名（如 <code className="text-zinc-400">HAM</code> /{' '}
            <code className="text-zinc-400">Hamilton</code> / <code className="text-zinc-400">汉密尔顿</code>）。
            生成器会自动拉取官方计时数据、侦测事故圈、建立新页面，约需 1–3 分钟。
            数据范围：<span className="text-zinc-400">2018 赛季至今</span>
            （FastF1 官方计时数据，2016–2017 赛季无数据，选了会直接报原因）。
            事故圈留空则自动侦测。页面生成后，双方发言引语由 AI 搜集补充（叫我就行）。
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <input className={inputCls} placeholder="年份 2021" value={year} onChange={(e) => setYear(e.target.value)} />
            <input className={inputCls} placeholder="分站 蒙扎/Italy/14" value={gp} onChange={(e) => setGp(e.target.value)} />
            <input className={inputCls} placeholder="车手A 汉密尔顿/HAM" value={a} onChange={(e) => setA(e.target.value)} />
            <input className={inputCls} placeholder="车手B 维斯塔潘/VER" value={b} onChange={(e) => setB(e.target.value)} />
            <input className={inputCls} placeholder="事故圈(可空)" value={lap} onChange={(e) => setLap(e.target.value)} />
          </div>
          <button
            onClick={submit}
            disabled={busy || !year || !gp || !a || !b}
            className="inline-flex items-center gap-2 rounded-lg bg-[#E10600] px-4 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          >
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {busy ? '正在抓取数据并生成页面…' : '生成事件页'}
          </button>
          {error && <p className="text-xs text-red-400">{error}</p>}
          {log && (
            <details className="text-xs text-zinc-500">
              <summary className="cursor-pointer hover:text-zinc-300">生成日志</summary>
              <pre className="mt-2 max-h-48 overflow-auto rounded-lg bg-black/60 p-3 whitespace-pre-wrap">{log}</pre>
            </details>
          )}
        </div>
      )}
    </div>
  );
}
