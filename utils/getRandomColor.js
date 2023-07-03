const getRandomColor = () => {
    const characters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return color;
};

module.exports = { getRandomColor };
