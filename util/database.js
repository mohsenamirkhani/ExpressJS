const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "marijoana", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;