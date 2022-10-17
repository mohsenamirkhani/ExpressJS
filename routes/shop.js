const path = require("path");

const express = require("express");

// const rootDir = require("../helpers/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render('shop', {prods: adminData.products, pageTitle: "My Shop Page", path: '/'});
});

module.exports = router;