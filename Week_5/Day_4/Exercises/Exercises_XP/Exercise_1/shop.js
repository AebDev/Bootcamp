const products = require("./products");


const searchProduct = (productName) => {
    return products.find(p => p.name === productName);
}

const product1 = searchProduct("Milk");
console.log(product1);

const product2 = searchProduct("Eggs");
console.log(product2);

const product3 = searchProduct("Bread");
console.log(product3);