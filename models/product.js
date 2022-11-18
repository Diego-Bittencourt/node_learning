//importing the fs module
const fs = require('fs');

//import the path module to successfully work with files in any OS
const path = require('path');

//create global variable to hold the path
const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
    );

//create a helper function
const getProductsFromFile = cb => {
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        } else {
        cb(JSON.parse(fileContent));
        }
    });

}; //end of helper function

//import the path helper function
const localpath = require('../util/path');



module.exports = class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile( products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}