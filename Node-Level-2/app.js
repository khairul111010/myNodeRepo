const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("from middleware");
  next();
});

app.use(adminRoutes);

app.use("/", (req, res, next) => {
  res.send("Sending req");
});

app.listen(3000);
