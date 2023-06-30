require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const rateLimit = require('express-rate-limit');
const placeholderRoutes = require('./routes/placeholderRoutes');

// EXPRESS APP
const app = express();

// RATE LIMITER
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10
});

// MIDDLEWARE
app.use(express.json());
app.use(limiter);
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// ROUTES
app.use('/v1/', placeholderRoutes);

// LISTEN FOR REQUESTS
app.listen(port, () => {
    console.log('\n----------------------------------');
    console.log(`🚀 SERVER RUNNING ON PORT ${port}...`);
    console.log('----------------------------------\n');
});
