const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //   console.log("from middleware");
  next();
});

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //automatic take take invalid url
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(3000);
