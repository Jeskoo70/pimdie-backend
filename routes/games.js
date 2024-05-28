const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const {
  sendAllGames, 
  sendGameById,
  sendGameCreated, 
  sendGameUpdated, 
  sendGameDeleted
} = require("../controllers/games");
const {
  findAllGames, 
  createGame, 
  findGameById, 
  updateGame, 
  deleteGame,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkIsGameExists,
  checkIsVoteRequest} = require("../middlewares/games");


gamesRouter.get(
  "/games/:id", 
  findGameById, 
  sendGameById
);

gamesRouter.get(
  "/games", 
  findAllGames, 
  sendAllGames
);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated,
  checkAuth
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated, 
  checkAuth
);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted, checkAuth); 

module.exports = gamesRouter;