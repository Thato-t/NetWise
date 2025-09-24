import { useEffect, useState } from 'react';
import Notice from '../components/Notice';
import { autoSpeedTestIfOnline, manualSpeedTest } from '../services/speedTest';
import { fetchBundles, getSpeedSummary } from '../services/api';

export default function Home() {
  const [notice, setNotice] = useState('');
  const [summary, setSummary] = useState(null);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    (async () => {
      const auto = await autoSpeedTestIfOnline();
      const s = await getSpeedSummary();
      const b = await fetchBundles();
      setSummary(s);
      setBundles(b.bundles || []);
      if (s?.bestNetwork) {
        setNotice(`${s.bestNetwork} is performing best in your area today.`);
      } else if (auto?.ok) {
        setNotice('You are online. Results will improve as community data syncs.');
      } else {
        setNotice('Offline mode: using historical data.');
      }
    })();
  }, []);

  const handleManualTest = async () => {
    const r = await manualSpeedTest();
    alert(`Latency ~ ${Math.round(r.latencyMs || 0)} ms`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">NetWise</h1>
          <button
            onClick={handleManualTest}
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Run Manual Speed Test
          </button>
        </header>

        <div className="mb-6">
          <Notice message={notice} />
        </div>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Bundle Comparison</h2>
          <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
            <ul className="divide-y divide-slate-200 dark:divide-slate-700">
              {bundles.length === 0 && (
                <li className="p-4 text-sm text-slate-500">No bundles yet.</li>
              )}
              {bundles.map((b, i) => (
                <li key={i} className="flex items-center justify-between p-4 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium">{b.network}</span>
                    <span className="text-slate-500">{b.bundle}</span>
                  </div>
                  <span className="font-semibold">R{b.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}


