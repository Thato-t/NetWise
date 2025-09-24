const dummy = [
  { network: 'MTN', plan: 'Data & Voice', size: '20 GB', days: '30 Days', price: 299 },
  { network: 'Vodacom', plan: 'Exclusive Data', size: '15 GB', days: '7 Days', price: 149 },
  { network: 'Telkom', plan: 'WiFi Bundle', size: '100 GB', days: '60 Days', price: 499 },
  { network: 'Cell C', plan: 'Unlimited Nights', size: '50 GB', days: '30 Days', price: 199 },
  { network: 'Rain', plan: '5G Home Internet', size: '1 TB', days: '90 Days', price: 899 },
];

export default function Compare() {
  return (
    <div className="mx-auto max-w-md px-4 py-4 pb-28">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"><span className="text-[#1677ff]">⏷</span> All Filters <span className="ml-1 rounded-full bg-[#1677ff] px-1.5 py-0.5 text-[10px] text-white">5</span></span>
        {['MTN','Vodacom','Telkom','Cell C','Rain'].map((n) => (
          <button key={n} className="rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-600">{n}</button>
        ))}
      </div>

      <div className="space-y-3">
        {dummy.map((b, i) => (
          <div key={i} className="flex items-center justify-between card p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-xs font-semibold dark:bg-slate-700">{b.network[0]}</div>
              <div>
                <div className="text-[11px] text-slate-500">{b.plan}</div>
                <div className="text-lg font-semibold text-blue-700">{b.size}</div>
                <div className="text-[11px] text-slate-500">{b.days}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold">R {b.price}</div>
              <button className="mt-2 rounded-md bg-emerald-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-emerald-500">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed inset-x-0 bottom-16 mx-auto max-w-md space-y-2 px-4">
        <button className="btn-primary w-full">Update Bundles</button>
        <button className="btn-outline w-full">Calculate Bundle Value</button>
        <button className="btn-outline w-full">Explore Guided Trial Bundles</button>
      </div>
    </div>
  );
}


