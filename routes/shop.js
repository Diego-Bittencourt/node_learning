const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    //sending a response
    res.send('<h1>Hello from express.js</h1>');
});

module.exports = router;