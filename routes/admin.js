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
    res.render('add-product', { pageTitle: 'Add Product' });
});

//filtering for /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    //the req.body is a new field creted by express.js
    products.push({ title: req.body.title })
    res.redirect('/');
})



exports.routes = router;
exports.products = products;