"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, category, price, description) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.description = description;
    }
    return Product;
}());
var products = [
    new Product(1, 'IPhone X', 'Phones', 1000, ''),
    new Product(2, 'Samsung X', 'Phones', 900, ''),
    new Product(3, 'IPhone XR', 'Phones', 950, '')
];
function getProducts() {
    return products;
}
app.get('/', function (req, res) { return res.send('Goto /products'); });
app.get('/products', function (req, res) { return res.json(getProducts()); });
var server = app.listen(8080, 'localhost');
//# sourceMappingURL=products-server.js.map