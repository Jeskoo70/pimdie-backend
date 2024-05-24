const sendAllCategories = require("../controllers/categories");
const findAllCategories = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories",findAllCategories, sendAllCategories);

module.exports = categoriesRouter;