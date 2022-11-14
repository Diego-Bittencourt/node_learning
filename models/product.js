const products = [];


module.exports = class Product {

    construct(t) {
        this.title = t;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}