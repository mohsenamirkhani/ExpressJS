const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

//app.get , app.post , app.put and app.delete are the other forms of app.use but only triggers for that specific method
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  const absolutPath = path.join(rootDir, 'views', 'add-product.html');
  res.sendFile(absolutPath);
});


// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  const body = req.body;
  console.log(body);
  res.redirect("/admin/add-product");
});

module.exports = router;