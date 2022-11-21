//import path
const path = require('path');


const express = require('express');


const adminController = require('../controllers/admin')

//import the router
const router = express.Router();




//the /admin segment of the url was already filtered in the app.js file and don't use it here.
//filtering for /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//filtering for /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

//grab the 
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);


module.exports = router;