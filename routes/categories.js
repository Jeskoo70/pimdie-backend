const {sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const {findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories",findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  checkAuth,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
); 
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted); 

module.exports = categoriesRouter;