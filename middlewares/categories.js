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

module.exports = { findAllCategories, findCategoryById, createCategory, updateCategory };