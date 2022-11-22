const fs = require('fs');
const path = require('path');
//create global variable to hold the path
const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
    );


module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {
                products: [],
                totalPrice: 0
            };
            if (!err) {
                //if there is a file, get the file data and put in memory
                cart = JSON.parse(fileContent);
            } //end of if

            // analyze the cart => find existing product with the id received in args
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            //add new product/ inscrease quantity
            if (existingProduct) {
                updatedProduct = { ...JSON.parse(existingProduct) };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {

            updatedProduct = { id: id, qty: 1 };
            cart.products = [...cart.products, updatedProduct];

            } //end of if

            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {console.log(err)})
    });


    } //end static method


    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return; 
            }
            const updatedCart = { ...fileContent };

            const product = updatedCart.products.findIndex(prod => prod.id === id);
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== prod.id);

            updatedCart.totalPrice = productPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), err => {
                console.log(err);
            });
        });
    }; //end deleteProduct static method
} //end cart class