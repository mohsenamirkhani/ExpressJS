const Sequilize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequilize.DOUBLE,
    allowNull: false,
  },
  iamgeUrl: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  description: Sequilize.STRING,
});

module.exports = Product;
