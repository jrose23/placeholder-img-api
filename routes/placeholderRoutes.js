const express = require('express');
const router = express.Router();
const { getGenericPlaceholder } = require('../controllers/placeholderControllers');

router.get('/:width/:height', getGenericPlaceholder);

module.exports = router;
