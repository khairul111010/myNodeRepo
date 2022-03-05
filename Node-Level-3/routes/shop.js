const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/productsControllers");

router.get("/", getAllProducts);

module.exports = router;
