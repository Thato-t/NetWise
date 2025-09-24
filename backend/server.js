const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Healthcheck
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// API routes
const apiRouter = require('./routes');
app.use('/api', apiRouter);

// Start cron tasks
try {
  const { scheduleScraping } = require('./cron/scrape');
  scheduleScraping();
} catch {}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});


