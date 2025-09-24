function suggestBestNetwork({ historical = [], community = [], location = null }) {
  // Combine historical and community data; very simple heuristic for now
  const scores = new Map();
  const add = (name, value) => scores.set(name, (scores.get(name) || 0) + value);

  for (const h of historical) add(h.network, (h.downloadMbps || 0) * 0.7);
  for (const c of community) add(c.network, (c.downloadMbps || 0) * 1.0);

  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]).map(([network, score]) => ({ network, score }));
  return { ranked, best: ranked[0] || null, location };
}

module.exports = { suggestBestNetwork };


