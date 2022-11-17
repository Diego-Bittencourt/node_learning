const Product = require('../models/product');





exports.getProducts = (req, res, next) => {
    //to fix the issue described in the fetchAll() function, I'll pass a callback function in
    //the function call
    //it's the same approach in the readFile(), although I had to write both sides here
    Product.fetchAll((products) => {
        //fetchAll is going to run this arrow function when it's done.
        res.render('shop/product-list', { 
            prods: products, 
            pageTitle: 'All products', 
            path: '/products'
        });
    });
    //I didn't call the function in a variale because it doesn't return anything.


    //the render method uses the template engine to run a template
    //you can pass data to the render method by adding a second argument with an object and a key name at your choice
    
    //It's not necessary to tell the path because the template engine tells the path and
    //also, don't need to add the extension because this is the default, stated in the app.js file in the app.set() method
};

//grab the index url
exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        pageTitle: "Welcome to Online Shop!",
        path: '/index',
        activeTop: true
    })
};

//grab the cart url
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'You Cart',
        path: '/cart'
    })
};


//grab the check out url
exports.getCheckOut = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Check Out',
        path: 'checkout'
    })
};

//grab the product details
exports.getProductDetails = (req, res, next) => {
    res.render('shop/product-details', {
        pageTitle: 'Details',
        path: 'shop/product-detail'
    })
};


exports.getEditProducts = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Products List',
        path: '/admin/products'
    })
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        path: '/orders'
    })
};