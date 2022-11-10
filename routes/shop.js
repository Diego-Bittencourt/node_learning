const path = require('path');


const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    //sending a file as response. the url must be absolute, not relative
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //the __dirname global variable that contains the absolute path to the folder it is called
    //in this case, the routes folder
    //it is important to use the path() method cuz it assures the path is correct for all OS
});

module.exports = router;