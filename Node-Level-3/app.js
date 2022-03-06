const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { pageNotFound } = require("./controllers/404Controller");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //   console.log("from middleware");
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(pageNotFound);

app.listen(3000);
