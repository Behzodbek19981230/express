const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "express.sqlite",
});

module.exports = sequelize;
