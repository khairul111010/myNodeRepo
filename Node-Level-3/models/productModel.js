const products = [];

class Product {
  constructor(title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}

module.exports = {
  Product,
};
