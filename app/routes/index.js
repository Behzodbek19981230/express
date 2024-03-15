const route = require("express").Router();
const user = require("./user");
const chapter = require("./chapter");
const auth = require("../middleware/auth");


route.use("/user", user);
route.use("/chapter", auth, chapter);
module.exports = route;
