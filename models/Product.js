const fs = require("fs");
const rootDir = require("../helpers/path");
const path = require("path");
const e = require("express");

const products = [];

const p = path.join(rootDir, "data", "product.txt");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetch(callback) {
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        callback(JSON.parse(fileContent));
      } else {
        fs.writeFile(p, "[]", (err) => {
          if (err) console.error("Error", err);
          callback([]);
        });
      }
    });
  }
};
