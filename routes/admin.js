const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button>Add Product</button></form>"
  ); // send the response
});

//app.get , app.post , app.put and app.delete are the other forms of app.use but only triggers for that specific method
router.post("/product", (req, res) => {
  const body = req.body;
  console.log(body);
  res.redirect("/add-product");
});

module.exports = router;