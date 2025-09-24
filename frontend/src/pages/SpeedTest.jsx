import { useState } from 'react';
import { manualSpeedTest } from '../services/speedTest';
// Using plain <img> icons from /public/icons/gray/

export default function SpeedTest() {
  const [result, setResult] = useState({ downloadMbps: 85.3, uploadMbps: 42.1, latencyMs: 18 });
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    const r = await manualSpeedTest();
    setResult({ ...result, latencyMs: r.latencyMs || result.latencyMs });
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-4 pb-28">
      <div className="card p-4 text-center">
        <div className="mb-3 grid place-items-center">
          <div className="relative grid h-40 w-40 place-items-center rounded-full border-8 border-slate-200 dark:border-slate-700">
            <div className="text-sm text-slate-500">{loading ? 'Testing…' : 'Ready'}</div>
            <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-500" style={{ transform: 'rotate(45deg)' }} />
          </div>
        </div>
        <button onClick={run} className="btn-primary mb-4 w-full">Run Speed Test</button>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-900/40">
            <div className="mx-auto mb-1 h-4 w-4"><img src="/icons/green/folder-down-arrow.png" alt="download" className="h-4 w-4" /></div>
            <div className="text-xs text-slate-500">Download</div>
            <div className="text-lg font-semibold">{result.downloadMbps} Mbps</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-900/40">
            <div className="mx-auto mb-1 h-4 w-4"><img src="/icons/green/folder-up-arrow.png" alt="upload" className="h-4 w-4" /></div>
            <div className="text-xs text-slate-500">Upload</div>
            <div className="text-lg font-semibold">{result.uploadMbps} Mbps</div>
          </div>
          <div className="col-span-2 rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-900/40">
            <div className="mx-auto mb-1 h-4 w-4"><img src="/icons/green/tachometer.png" alt="ping" className="h-4 w-4" /></div>
            <div className="text-xs text-slate-500">Ping</div>
            <div className="text-lg font-semibold">{Math.round(result.latencyMs)} ms</div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-dashed border-[var(--color-border)] p-4 text-center text-xs text-slate-500">Historical Trends (placeholder chart)</div>
      </div>
    </div>
  );
}


