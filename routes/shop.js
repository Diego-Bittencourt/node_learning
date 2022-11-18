const path = require('path');


const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/index', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct); //assign a dynamic value started by a colon : Just like Vue.
//to add a normal like (/product/delete) it shoudl come before the dynamic route.
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckOut);
router.get('/orders', shopController.getOrders);

module.exports = router;
