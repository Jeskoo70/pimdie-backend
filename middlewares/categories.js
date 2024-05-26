const categories = require("../models/category");

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
};


const findCategoryById = async (req, res, next) => {
  try {
    req.category - await categories.findById(req.params.id);
    next();
  } catch (error) {
    res.status(404).send({message: "Category not found"});
  }
};

const createCategory = async(req, res, next) => {
  try {
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({message: "Error creating category"});
  }
};

const updateCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send(JSON.stringify({ message: "Error updating category" }));
  }
}; 

const deleteCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send({ message: "Error deleting category" });
  }
}; 


const checkIsCategoryExists = async (req, res, next) => {

  const isInArray = req.categoriesArray.find((category) => {
    return req.body.name === category.name;
  });
  // Если нашли совпадение, то отвечаем кодом 400 и сообщением
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
  } else {
  // Если категория, которую хотим создать, действительно новая, то передаём управление дальше
    next();
  }
}; 

const checkEmptyName = async (req, res, next) => {
  if (!req.body.name) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите название категории" }));
  } else {
    next();
  }
}; 


module.exports = { findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName };