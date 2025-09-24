const { Router } = require('express');
const { bundlesController } = require('../controllers');

const router = Router();

router.get('/', bundlesController.listBundles);
router.post('/refresh', bundlesController.refreshBundles);

module.exports = router;


