const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require('./controllers/error');

const app = express();

// app.set("view engine", "pug");
app.set("view engine", "ejs");

// this line is for declearing the directory of the views,
//but if the templates are in the views folder as current location of them this line is not needed
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use(errorController.get404);

app.listen(3000);
