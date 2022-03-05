const express = require("express");
const router = express.Router();
const adminRoutes = require("./admin");

router.get("/", (req, res, next) => {
  // console.log(adminRoutes.products);
  res.render("shop", {
    pageTitle: "Shop",
    products: adminRoutes.products,
    hasProducts: adminRoutes.products.length > 0,
  });
});

module.exports = router;
