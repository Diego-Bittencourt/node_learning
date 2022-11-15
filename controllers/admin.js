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
    //store the data from form into variables
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    //create a new object using the class. The order of args is defined in the constructor
    const product = new Product(title, imageUrl, description, price);
    
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