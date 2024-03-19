const route = require("express").Router();
const user = require("./user");
const auth = require("../middleware/auth");
const category = require("./category");
route.use("/user", user);
route.use("/category", category);
module.exports = route;
