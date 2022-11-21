const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        editing: false
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

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }

    const prodId = req.params.productId;
    Product.findById(prodId, product => {

        if (!product) {
            return res.redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            path: '/admin/editproduct', 
            editing: editMode,
            product: product
            });
        })};


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