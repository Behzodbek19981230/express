const CategoryController = require("../controllers/Category");

const route = require("express").Router();

route.get("/", CategoryController.getAllCategory);
// route.delete("/:id", User.delete);
// route.get("/:id", auth, User.getByIdUser);

module.exports = route;
