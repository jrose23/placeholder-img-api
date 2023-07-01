const Color = require('color');

const getTextColor = bg => {
    const background = Color(bg);
    const textWhite = '#ffffff';
    const textBlack = '#000000';

    if (background.isDark()) {
        return textWhite;
    }

    if (background.isLight()) {
        return textBlack;
    }
};

module.exports = { getTextColor };
