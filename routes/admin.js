//import path
const path = require('path');


const express = require('express');


const productsController = require('../controllers/products')

//import the router
const router = express.Router();




//the /admin segment of the url was already filtered in the app.js file and don't use it here.
//filtering for /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

//filtering for /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);



module.exports = router;