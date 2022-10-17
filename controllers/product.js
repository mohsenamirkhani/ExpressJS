const products = [];

const ProductModel = require('../models/Product');

exports.getAddProducts = (req, res, next) => {
  // const absolutPath = path.join(rootDir, "views", "add-product.html");
  // res.sendFile(absolutPath);
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res) => {
  const product = new ProductModel(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  ProductModel.fetch(products => {
    res.render("shop", {
      prods: products,
      pageTitle: "My Shop Page",
      path: "/",
    });
  })
};
