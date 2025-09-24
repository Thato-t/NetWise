async function listResults(_req, res) {
  res.json({ results: [] });
}

async function submitResult(req, res) {
  const { network, downloadMbps, uploadMbps, latencyMs, coords } = req.body || {};
  if (!network || downloadMbps == null) {
    return res.status(400).json({ error: 'network and downloadMbps required' });
  }
  // TODO: persist to DB
  res.status(201).json({ ok: true });
}

module.exports = { listResults, submitResult };


