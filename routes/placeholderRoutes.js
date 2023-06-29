const express = require('express');
const router = express.Router();
const { test } = require('../controllers/placeholderControllers');

router.get('/', test);

module.exports = router;
