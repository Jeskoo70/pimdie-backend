const { sendAllUsers, sendUserById, sendUserCreated, sendUserUpdated } = require("../controllers/users");
const { findAllUsers, findUserById, createUser, updateUser } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users",findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.put("/users/:id", findUserById, updateUser, sendUserUpdated);

module.exports = usersRouter;