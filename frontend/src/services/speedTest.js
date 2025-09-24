export async function autoSpeedTestIfOnline() {
  if (!navigator.onLine) return null;
  try {
    const start = performance.now();
    const resp = await fetch('https://www.google.com/generate_204', { cache: 'no-store' });
    const latencyMs = performance.now() - start;
    return { latencyMs, ok: resp.status === 204 };
  } catch {
    return { latencyMs: null, ok: false };
  }
}

export async function manualSpeedTest() {
  // Placeholder: implement download/upload test; return basic result for now
  const start = performance.now();
  await fetch('https://www.google.com/generate_204', { cache: 'no-store' }).catch(() => {});
  const latencyMs = performance.now() - start;
  return { downloadMbps: null, uploadMbps: null, latencyMs };
}


