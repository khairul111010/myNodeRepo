const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

const products = [];

router.get("/product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});
router.post("/add-product", (req, res, next) => {
  products.push({
    product: req.body.product,
    price: req.body.price,
    qty: req.body.qty,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
