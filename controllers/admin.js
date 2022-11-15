const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        activeAddProduct: true, 
        formsCSS: true, 
        productCSS: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        //fetchAll is going to run this arrow function when it's done.
        res.render('admin/products', { 
            prods: products, 
            pageTitle: 'Admin products', 
            path: '/admin/products'
        });
    });
};