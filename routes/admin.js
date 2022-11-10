const express = require('express');

const router = express.Router();

//the /admin segment of the url was already filtered in the app.js file and don't use it here.
//filtering for /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    //sending the form
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

//filtering for /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    //the req.body is a new field creted by express.js
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;