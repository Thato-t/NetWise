import { useState } from 'react';

const recs = [
  { provider: 'MTN', name: 'Mega Data Max', price: 399, per: 'month' },
  { provider: 'Vodacom', name: 'Connect More Plan', price: 349, per: 'month' },
  { provider: 'Telkom', name: 'Unlimited Power', price: 499, per: 'month' },
];

export default function Calculator() {
  const [gb, setGb] = useState(20);
  return (
    <div className="mx-auto max-w-md px-4 py-4 pb-28">
      <div className="card p-4">
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-medium">Monthly Data Usage</label>
          <div className="rounded-md border border-slate-300 px-2 py-1 text-xs dark:border-slate-600">GB</div>
        </div>
        <input type="range" min="0" max="100" value={gb} onChange={(e) => setGb(Number(e.target.value))} className="w-full" />
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{gb} GB</div>
        <button className="btn-primary mt-4 w-full">Calculate Recommendation</button>
      </div>

      <div className="mt-4 space-y-3">
        {recs.map((r, i) => (
          <div key={i} className="card p-4">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{r.provider}</div>
                <div className="text-xs text-slate-500">{r.name}</div>
              </div>
              <div className="text-sm font-semibold">R{r.price}/{r.per}</div>
            </div>
            <div className="flex gap-2">
              <button className="btn-outline flex-1">View Bundle Details</button>
              <button className="flex-1 rounded-md bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">Compare Similar Bundles</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <button className="btn-outline w-full">Explore Guided Trials</button>
      </div>
    </div>
  );
}


