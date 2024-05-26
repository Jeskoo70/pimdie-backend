const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
};

const findUserById = async (req, res, next) => {
  try {
    req.user - await users.findById(req.params.id);
    next();
  } catch (error) {
    res.status(404).send({message: "User not found"});
  }
};

const createUser = async(req, res, next) => {
  try {
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({message: "Error creating user"});
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send(JSON.stringify({ message: "Error updating user" }));
  }
}; 

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send({ message: "Error deleting user" });
  }
}; 

module.exports = { findAllUsers, findUserById, createUser, updateUser, deleteUser };