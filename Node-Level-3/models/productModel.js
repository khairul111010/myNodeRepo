const fs = require("fs");
const path = require("path");

class Product {
  constructor(title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, content) => {
      let products = [];

      if (!err) {
        products = JSON.parse(content);
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });

    // products.push(this);
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, content) => {
      if (err) {
        return cb([]);
      }
      let parsedContent = JSON.parse(content);
      console.log(parsedContent);
      return cb(parsedContent);
    });
    // return products;
  }
}

module.exports = {
  Product,
};
