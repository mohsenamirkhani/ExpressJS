const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

//app.get , app.post , app.put and app.delete are the other forms of app.use but only triggers for that specific method
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // const absolutPath = path.join(rootDir, "views", "add-product.html");
  // res.sendFile(absolutPath);
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  const body = req.body;
  products.push(body);
  res.redirect("/");
});

module.exports = { routes: router, products };
