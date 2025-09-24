const { Router } = require('express');
const bundlesRouter = require('./bundles');
const speedRouter = require('./speed');
const resultsRouter = require('./results');

const router = Router();

router.use('/bundles', bundlesRouter);
router.use('/speed', speedRouter);
router.use('/results', resultsRouter);

module.exports = router;


