const express = require('express');
const router = express.Router();
const {
    getGenericPlaceholder,
    getNamedColorPlaceholder
} = require('../controllers/placeholderControllers');

// Get generic placeholder
router.get('/:width/:height', getGenericPlaceholder);

// Get placeholder with named color
router.get('/:width/:height/name/:color', getNamedColorPlaceholder);

module.exports = router;
