//create an variable to store incoming data
const products = [];


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        ctiveAddProduct: true, 
        formsCSS: true, 
        productCSS: true
    });
};

exports.postAddProduct = (req, res, next) => {
    //the req.body is a new field creted by express.js
    products.push({ title: req.body.title })
    res.redirect('/');
};


exports.getProducts = (req, res, next) => {
    //the render method uses the template engine to run a template
    //you can pass data to the render method by adding a second argument with an object and a key name at your choice
    res.render('shop', { prods: products, pageTitle: "Shop", path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true });
    //It's not necessary to tell the path because the template engine tells the path and
    //also, don't need to add the extension because this is the default, stated in the app.js file in the app.set() method
};