const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001/api';

export async function fetchBundles() {
  const res = await fetch(`${API_BASE}/bundles`);
  const data = await res.json();
  console.log(data)
  return data;
}

export async function runSpeedTest() {
  const res = await fetch(`${API_BASE}/speed/run`, { method: 'POST' });
  const data = await res.json();
  return data;
}

export async function getSpeedSummary() {
  const res = await fetch(`${API_BASE}/speed/summary`);
  const data = await res.json();
  return data;
}

export async function submitResult(payload) {
  const res = await fetch(`${API_BASE}/results`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data =  res.json();
  return data;
}


