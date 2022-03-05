const products = [];

//admin.js
const getProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

//admin.js
const addProducts = (req, res, next) => {
  products.push({
    product: req.body.product,
    price: req.body.price,
    qty: req.body.qty,
  });
  res.redirect("/");
};

// shop.js
const getAllProducts = (req, res, next) => {
  // console.log(adminRoutes.products);
  res.render("shop", {
    pageTitle: "Shop",
    products: products,
    hasProducts: products.length > 0,
  });
};

module.exports = {
  getProduct,
  addProducts,
  getAllProducts,
};
