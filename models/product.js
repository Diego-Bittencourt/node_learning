//importing the fs module
const fs = require('fs');

//import the path module to successfully work with files in any OS
const path = require('path');

//import the path helper function
const localpath = require('../util/path');



module.exports = class Product {

    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = []; //create an empty array
            if (!err) { //check if there is no error
                products = JSON.parse(fileContent); //access the json file and convert its content to Vanilla JS
            }
            products.push(this); //add the file content into the products array in memory.
            //the line above used the "this" keyword only because it is an arrow function. It refers to the class

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        //during practice, the lenght of undefined error happened
        //This happens because both functions below, fs.readFile and JSON.parse are async, therefore
        //they are registered callback and the fetchAll() function doesn't return anything.
        const p = path.join(localpath, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]); //return an empty array because that is what fetchAll expects
            }
            cb(JSON.parse(fileContent))
            //to fix the issue described above, one way of fixing it is to give fetchAll a callback function
            //that way, the callback function will get the data when it's done.
            //Now I have to provide an arrow function in the fetchAll() call.
        })
    }
}