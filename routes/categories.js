const {sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories");
const {findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories",findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", findCategoryById, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted); 

module.exports = categoriesRouter;