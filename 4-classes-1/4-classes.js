const path = require('path');
const fs = require('fs');
const rateUSD = 68;

const pathToJSON = path.resolve(__dirname, 'result.json');
const pathfromCSV = path.resolve(__dirname, 'products.csv');
const content = fs.readFileSync(pathfromCSV, 'utf8');
const items = content.split(', ');

function Product(str) {

    const value = str.split(' ');
    this.price ={"RU": Number(value[0]), "USD": Math.round(Number(value[0])/rateUSD*100)/100};
    this.title = value[1];
}

const products = items.map(item => new Product(item));
const productsToJSON = JSON.stringify(products);

fs.writeFileSync(pathToJSON,productsToJSON,'utf8');


