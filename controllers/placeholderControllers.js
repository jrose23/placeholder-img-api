const test = async (req, res) => {
    res.status(200).json({ message: 'Hi there!' });
};

module.exports = { test };
