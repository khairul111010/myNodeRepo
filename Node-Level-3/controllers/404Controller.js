const pageNotFound = (req, res, next) => {
  //automatic take take invalid url
  res.status(404).render("404", { pageTitle: "Page not found" });
};

module.exports = {
  pageNotFound,
};
