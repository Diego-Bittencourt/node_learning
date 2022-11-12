const path = require('path');


const express = require('express');

const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    console.log(adminData.products)
    const products = adminData.products;
    //the render method uses the template engine to run a template
    //you can pass data to the render method by adding a second argument with an object and a key name at your choice
   res.render('shop', { prods: products, docTitle: "Shop" });
   //It's not necessary to tell the path because the template engine tells the path and
   //also, don't need to add the extension because this is the default, stated in the app.js file in the app.set() method
});

module.exports = router;