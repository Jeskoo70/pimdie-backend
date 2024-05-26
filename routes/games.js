const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
const {findAllGames, createGame, findGameById, updateGame, deleteGame} = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendAllGames, sendGameCreated)
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated); 
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted); 

module.exports = gamesRouter;