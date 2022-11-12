//import path
const path = require('path');


const express = require('express');


//import route utility
const rootDir = require('../util/path');


//import the router
const router = express.Router();


//create an variable to store incoming data
const products = [];

//the /admin segment of the url was already filtered in the app.js file and don't use it here.
//filtering for /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    //sending the form
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //'<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');

    //using the rootDir variable I created in the util folder
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

//filtering for /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    //the req.body is a new field creted by express.js
    products.push({title: req.body.title})
    res.redirect('/');
})



exports.routes = router;
exports.products = products;