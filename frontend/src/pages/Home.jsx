import { useEffect, useState } from 'react';
import Notice from '../components/Notice';
// Using plain <img> icons from /public/icons/gray/
import { autoSpeedTestIfOnline, manualSpeedTest } from '../services/speedTest';
import { fetchBundles, getSpeedSummary } from '../services/api';

export default function Home() {
  const [notice, setNotice] = useState('');
  const [speed, setSpeed] = useState('--');
  const [dataUsed, setDataUsed] = useState('—');
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    (async () => {
      const auto = await autoSpeedTestIfOnline();
      const s = await getSpeedSummary();
      const b = await fetchBundles();
      setSpeed(s?.networks?.[0]?.downloadMbps ?? (auto?.latencyMs ? '~' : '--'));
      setDataUsed('1.2 / 5 GB'); // placeholder until wired to real usage
      setBundles((b?.bundles || []).slice(0, 4));
      if (s?.bestNetwork) {
        setNotice(`${s.bestNetwork} is performing best in your area today.`);
      } else if (auto?.ok) {
        setNotice('Connected via WiFi');
      } else {
        setNotice('Offline mode: using preloaded data');
      }
    })();
  }, []);

  const handleSpeedTest = async () => {
    const r = await manualSpeedTest();
    alert(`Latency ~ ${Math.round(r.latencyMs || 0)} ms`);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-md px-4 py-6 pb-24">
        <div className="mb-4">
          <div className="mb-1 text-center text-[13px] font-medium text-slate-500">Database & WiFi Helper</div>
          <h1 className="text-[22px] font-semibold">Good morning, User!</h1>
          <p className="text-sm text-slate-900 dark:text-slate-300">Here’s your network overview.</p>
        </div>

        <Notice message={notice} />

        {/* Status cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-2 text-center shadow-sm">
            <img src="/icons/green/compass.png" alt="compare" className="h-8 w-8 ml-18 mb-2" />
            <div className="mb-1 text-xl text-black font-semibold">Internet Speed</div>
            <div className="text-2xl font-semibold">{typeof speed === 'number' ? speed : '--'}</div>
            <div className="text-xs text-slate-500">Mbps</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <img src="/icons/blue/database.png" alt="compare" className="h-8 w-8 ml-18 mb-2" />
            <div className="mb-1 text-xl text-black font-semibold">Database Usage</div>
            <div className="text-2xl font-semibold">{dataUsed.split(' ')[0]}</div>
            <div className="text-xs text-slate-500">{dataUsed.split(' ').slice(1).join(' ')}</div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-6">
          <h2 className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-2">
            <button onClick={handleSpeedTest} className="flex items-center justify-between card p-4 text-left text-sm">
              <div className="flex items-center gap-3 font-medium"><img src="/icons/blue/trending-up.png" alt="speed" className="h-5 w-5" /> Run Speed Test</div>
              <span className="text-slate-400">›</span>
            </button>
            <a href="/compare" className="flex items-center justify-between card p-4 text-left text-sm">
              <div className="flex items-center gap-3 font-medium"><img src="/icons/blue/handshake.png" alt="compare" className="h-5 w-5" /> Compare Bundles</div>
              <span className="text-slate-400">›</span>
            </a>
          </div>
        </div>

        {/* Recommended bundles */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-600 dark:text-slate-300">Recommended Bundles</h2>
            <a href="/trials" className="text-xs text-blue-600 hover:underline">Explore Trial Bundles</a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {bundles.length === 0 && (
              <div className="col-span-2 rounded-lg border border-dashed border-[var(--color-border)] p-4 text-center text-sm text-slate-500">No bundles yet.</div>
            )}
            {bundles.map((b, i) => (
              <div key={i} className="card p-3">
                <div className="text-xs text-slate-500">{b.network}</div>
                <div className="mt-1 text-[#1677ff]">{b.bundle}</div>
                <div className="text-xs text-slate-500">{b.days || '7'} days</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm font-semibold">R{b.price}</div>
                  <button className="rounded-md border border-[var(--color-border)] px-2 py-1 text-xs hover:bg-slate-50">View Details</button>
                </div>
              </div>
            ))}
          </div>

          <a href="/calculator" className="btn-primary mt-4 w-full">Calculate Value</a>
        </div>
      </div>
    </div>
  );
}


