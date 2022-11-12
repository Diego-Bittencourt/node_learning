const path = require('path');


const express = require('express');

const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    //the data below is coming from the admin.js file. 
    //This is data that is inherited in the server, so all users get the same data
    //it is usually NOT what you want. In rare occasions this might be useful
    console.log(adminData.products)

    //sending a file as response. the url must be absolute, not relative
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //the __dirname global variable that contains the absolute path to the folder it is called
    //in this case, the routes folder
    //it is important to use the path() method cuz it assures the path is correct for all OS
});

module.exports = router;