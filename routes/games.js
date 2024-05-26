const {sendAllGames, sendGameCreated, sendGameUpdated} = require("../controllers/games");
const {findAllGames, createGame, findGameById, updateGame} = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendAllGames, sendGameCreated)
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated); 

module.exports = gamesRouter;