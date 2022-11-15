//importing the fs module
const fs = require('fs');

//import the path module to successfully work with files in any OS
const path = require('path');

//create global variable to hold the path
const p = path.join(
    path.dirname(process.mainModule.filename),
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

    constructor(t) {
        this.title = t;
    }

    save() {
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
}