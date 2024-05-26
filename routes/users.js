const usersRouter = require('express').Router();
  
const {
    findAllUsers, 
    createUser, 
    findUserById, 
    updateUser,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    hashPassword,
    checkIsUserExists
} = require('../middlewares/users');
const {
    sendAllUsers, 
    sendUserCreated, 
    sendUserById, 
    sendUserUpdated,
    sendUserDeleted,
    sendMe
}= require('../controllers/users');
const {checkAuth} = require('../middlewares/auth');

usersRouter.get(
    '/users', 
    findAllUsers, 
    sendAllUsers
);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  );
usersRouter.get(
    "/users/:id", 
    findUserById, 
    sendUserById
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  );
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
); 
usersRouter.get(
    "/me",
    checkAuth, 
    sendMe
);


module.exports = usersRouter; 


// const { sendAllUsers, sendUserById, sendUserCreated, sendUserUpdated, sendUserDeleted, sendMe } = require("../controllers/users");
// const { checkAuth } = require("../middlewares/auth");
// const { findAllUsers, findUserById, createUser, updateUser, deleteUser, hashPassword, checkEmptyNameAndEmailAndPassword, checkIsUserExists, checkEmptyNameAndEmail } = require("../middlewares/users");

// const usersRouter = require("express").Router();

// usersRouter.get("/users",findAllUsers, sendAllUsers);
// usersRouter.get("/users/:id", findUserById, sendUserById);
// usersRouter.get("/me/:id", findUserById, sendUserById, sendMe);
// usersRouter.post(
//   "/users",
//   findAllUsers,
//   checkIsUserExists,
//   checkEmptyNameAndEmailAndPassword,
//   checkAuth,
//   hashPassword,
//   createUser,
//   sendUserCreated
// );
// usersRouter.put(
//   "/users/:id",
//   checkEmptyNameAndEmail,
//   updateUser,
//   sendUserUpdated
// ); 
// usersRouter.delete("/users/:id", deleteUser, sendUserDeleted); 

// module.exports = usersRouter;