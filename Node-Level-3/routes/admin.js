const express = require("express");
const router = express.Router();

const {
  getProduct,
  addProducts,
} = require("../controllers/productsControllers");

router.get("/product", getProduct);
router.post("/add-product", addProducts);

module.exports = router;
