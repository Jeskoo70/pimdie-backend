const {sendAllCategories, sendCategoryById, sendCategoryCreated} = require("../controllers/categories");
const {findAllCategories, findCategoryById, createCategory} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories",findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated)


module.exports = categoriesRouter;