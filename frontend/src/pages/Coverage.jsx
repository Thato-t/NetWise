export default function Coverage() {
  return (
    <div className="mx-auto max-w-md px-4 py-4 pb-28">
      <div className="card p-4">
        <div className="mb-3 flex items-center gap-2 text-xs">
          <div className="rounded-md border border-slate-300 px-2 py-1 dark:border-slate-600">Vodacom</div>
          <div className="rounded-md border border-slate-300 px-2 py-1 dark:border-slate-600">MTN</div>
          <div className="rounded-md border border-slate-300 px-2 py-1 dark:border-slate-600">Telkom</div>
          <div className="rounded-md border border-slate-300 px-2 py-1 dark:border-slate-600">Cell C</div>
        </div>
        <div className="aspect-video w-full rounded-md bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-orange-200 via-amber-100 to-sky-200 dark:from-orange-900/40 dark:via-amber-900/30 dark:to-sky-900/40" />
        <div className="mt-3 rounded-md border border-[var(--color-border)] bg-slate-50 p-3 text-xs">
          <div className="mb-1 font-medium">Map Legend</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> High Speed (50+ Mbps)</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-600" /> Moderate Speed (10–50 Mbps)</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-500" /> Coverage Area</div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="btn-primary flex-1">Update Coverage Data</button>
          <button className="btn-outline flex-1">Report Issue</button>
        </div>
      </div>
    </div>
  );
}


