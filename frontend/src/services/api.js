const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001/api';

export async function fetchBundles() {
  const res = await fetch(`${API_BASE}/bundles`);
  return res.json();
}

export async function runSpeedTest() {
  const res = await fetch(`${API_BASE}/speed/run`, { method: 'POST' });
  return res.json();
}

export async function getSpeedSummary() {
  const res = await fetch(`${API_BASE}/speed/summary`);
  return res.json();
}

export async function submitResult(payload) {
  const res = await fetch(`${API_BASE}/results`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}


