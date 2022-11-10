const express = require('express');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    //sending the form
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
    //the req.body is a new field creted by express.js
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;