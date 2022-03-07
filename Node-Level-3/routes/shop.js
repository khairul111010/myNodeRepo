const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/productsControllers");

router.get("/", getAllProducts);
router.get("/products", getAllProducts);
router.get("/cart", getAllProducts);
router.get("/checkout", getAllProducts);

module.exports = router;
