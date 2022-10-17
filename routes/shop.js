// const path = require("path");

const express = require("express");

const productController = require('../controllers/product');
const shopController = require('../controllers/shop');

// const rootDir = require("../helpers/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/cart", shopController.getCard);

router.get("/checkout", shopController.getCheckout);

router.get("/products", productController.getProducts);

router.get("/product-details", productController.getProductDetails);

module.exports = router;