// const path = require("path");
// const rootDir = require("../helpers/path");

const express = require("express");

const productsController = require('../controllers/product');

//app.get , app.post , app.put and app.delete are the other forms of app.use but only triggers for that specific method
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProducts);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProducts);

router.get("/products", productsController.getAdminProducts)

router.get("/edit-product", productsController.getEditProduct)

module.exports = router;
