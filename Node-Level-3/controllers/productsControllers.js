const { Product } = require("../models/productModel");

//admin.js
const getProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

//admin.js
const addProducts = (req, res, next) => {
  const product = new Product(req.body.product, req.body.price, req.body.qty);
  console.log(product);
  product.save(product);
  res.redirect("/");
};

// shop.js
const getAllProducts = (req, res, next) => {
  // console.log(adminRoutes.products);
  Product.fetchAll((products) => {
    res.render("shop", {
      pageTitle: "Shop",
      products: products,
      hasProducts: products.length > 0,
    });
  });
};

module.exports = {
  getProduct,
  addProducts,
  getAllProducts,
};
