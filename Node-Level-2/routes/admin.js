const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

router.get("/product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
