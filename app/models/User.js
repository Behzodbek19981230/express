const Sequelize = require("sequelize");
const db = require("../../config/db");
const User = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, // This makes it auto-incrementing
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    fullName: Sequelize.STRING,
    avatar: Sequelize.STRING,
  },
  { underscored: true }
);

module.exports = User;
