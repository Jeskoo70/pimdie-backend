const {sendAllGames, sendGameCreated} = require("../controllers/games");
const {findAllGames, createGame} = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendAllGames, sendGameCreated)

module.exports = gamesRouter;