const sendAllUsers = require("../controllers/users");
const findAllUsers = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users",findAllUsers, sendAllUsers);

module.exports = usersRouter;