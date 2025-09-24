const { Router } = require('express');
const { speedController } = require('../controllers');

const router = Router();

router.post('/run', speedController.runSpeedTest);
router.get('/summary', speedController.getSpeedSummary);

module.exports = router;


