const cron = require('node-cron');
const { scrapeBundlePrices } = require('../scraper/bundles');

function scheduleScraping() {
  // Every 6 hours
  cron.schedule('0 */6 * * *', async () => {
    try {
      const data = await scrapeBundlePrices();
      console.log(`Scraped ${data.length} bundles at`, new Date().toISOString());
      // TODO: save to DB
    } catch (err) {
      console.error('Scrape error', err.message);
    }
  });
}

module.exports = { scheduleScraping };


