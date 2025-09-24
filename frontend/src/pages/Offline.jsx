export default function Offline() {
  return (
    <div className="mx-auto max-w-md px-4 py-4 pb-28">
      <div className="card p-6 text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-slate-300 text-slate-500 dark:border-slate-600">⚡</div>
        <h1 className="mb-1 text-lg font-semibold">Offline Mode</h1>
        <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">You are currently offline. The app is using preloaded data.</p>
        <div className="mx-auto mb-4 w-full max-w-sm text-left text-sm">
          <div className="mb-2 flex items-start gap-2"><span>•</span> Cached Bundle Data</div>
          <div className="mb-2 flex items-start gap-2"><span>•</span> Saved Coverage Maps</div>
          <div className="mb-2 flex items-start gap-2"><span>•</span> Value Calculator</div>
        </div>
        <button className="btn-primary w-full">Refresh Data (When Online)</button>
      </div>
    </div>
  );
}


