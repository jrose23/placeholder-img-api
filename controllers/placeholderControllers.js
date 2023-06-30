const { createCanvas } = require('canvas');

// @desc    Get generic placeholder
// @route   GET /:width/:height
// @access  Public
const getGenericPlaceholder = async (req, res) => {
    const width = parseInt(req.params.width);
    const height = parseInt(req.params.height);

    try {
        // Create canvas
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Set canvas styles
        ctx.fillStyle = '#666666'; // Default Color
        ctx.fillRect(0, 0, width, height);

        // Set font styles
        ctx.font = '32px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Set text
        const placeholderText = `${width} x ${height}`;
        ctx.fillText(placeholderText, width / 2, height / 2);

        // Store image data
        const buffer = canvas.toBuffer('image/png');

        // Send image in response
        res.set('Content-Type', 'image/png');
        res.send(buffer);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { getGenericPlaceholder };
