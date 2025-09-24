export default function Trials() {
  const trials = [
    { provider: 'MTN', name: 'Starter Data Pack', price: 10, size: '500MB', days: 3 },
    { provider: 'Vodacom', name: 'Quick Connect Bundle', price: 12, size: '600MB', days: 2 },
    { provider: 'Telkom', name: 'Daily Surf Plan', price: 8, size: '400MB', days: 3 },
    { provider: 'Cell C', name: 'Weekend Warrior', price: 15, size: '1GB', days: 2 },
    { provider: 'Rain', name: 'Connect Basic', price: 9, size: '450MB', days: 5 },
    { provider: 'MTN', name: 'Trial Boost Pack', price: 11, size: '550MB', days: 7 },
  ];

  return (
    <div className="mx-auto max-w-md px-4 py-4 pb-28">
      <div className="mb-3 flex items-center justify-between text-xs">
        <button className="rounded-md border border-slate-300 px-3 py-1 dark:border-slate-600">Filter</button>
        <button className="rounded-md border border-slate-300 px-3 py-1 dark:border-slate-600">Sort By</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {trials.map((t, idx) => (
          <div key={idx} className="card p-3">
            <div className="text-xs text-slate-500">{t.provider}</div>
            <div className="mt-1 text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-slate-500">R{t.price} • {t.size} • {t.days} Days</div>
            <div className="mt-2 flex gap-2">
              <button className="btn-primary flex-1 px-2 py-1 text-xs">Select Trial</button>
              <button className="btn-outline flex-1 px-2 py-1 text-xs">Learn</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <button className="btn-outline w-full">Compare More Bundles</button>
        <button className="btn-outline w-full">Calculate Your Value</button>
      </div>
    </div>
  );
}


