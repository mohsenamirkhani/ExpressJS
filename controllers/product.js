const products = [];

const ProductModel = require("../models/Product");

exports.getAddProducts = (req, res, next) => {
  // const absolutPath = path.join(rootDir, "views", "add-product.html");
  // res.sendFile(absolutPath);
  res.render("admin/add-product", {
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
  ProductModel.fetch((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "My Shop Page",
      path: "/products",
    });
  });
};

exports.getAdminProducts = (req, res, next) => {
  ProductModel.fetch((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Shop Page",
      path: "/admin/products",
    });
  });
};

exports.getProductDetails = (req, res, next) => {
  res.render("shop/product-details", {
    pageTitle: "Product Details",
    path: "product-details",
  });
};

exports.getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
  });
};
