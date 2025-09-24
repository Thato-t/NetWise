const { scrapeBundlePrices } = require('../scraper/bundles');

async function listBundles(_req, res) {
  // TODO: pull from DB; stubbed for now
  res.json({ bundles: [], source: 'stub' });
}

async function refreshBundles(_req, res) {
  try {
    const data = await scrapeBundlePrices();
    // TODO: persist to DB
    res.json({ updated: data.length, bundles: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to refresh bundles' });
  }
}

module.exports = { listBundles, refreshBundles };


