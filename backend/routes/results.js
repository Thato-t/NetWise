const { Router } = require('express');
const { resultsController } = require('../controllers');

const router = Router();

router.get('/', resultsController.listResults);
router.post('/', resultsController.submitResult);

module.exports = router;


