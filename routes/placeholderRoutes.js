const express = require('express');
const router = express.Router();
const {
    getGenericPlaceholder,
    getNamedColorPlaceholder,
    getHexColorPlaceholder,
    getRgbColorPlaceholder,
    getHslColorPlaceholder,
    getRandomColorPlaceholder
} = require('../controllers/placeholderControllers');

// Get generic placeholder
router.get('/:width/:height', getGenericPlaceholder);

// Get placeholder with named color
router.get('/:width/:height/color/name/:colorName', getNamedColorPlaceholder);

// Get placeholder with hex color (without # symbol)
router.get('/:width/:height/color/hex/:hexCode', getHexColorPlaceholder);

// Get placeholder with RGB color
router.get('/:width/:height/color/rgb/:red/:green/:blue', getRgbColorPlaceholder);

// Get placeholder with HSL color (without % symbol)
router.get('/:width/:height/color/hsl/:hue/:saturation/:lightness', getHslColorPlaceholder);

// Get placeholder with random color
router.get('/:width/:height/color/random', getRandomColorPlaceholder);

module.exports = router;
