const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games
  .find({})
  .populate("categories")
  .populate({ path: "users", select: "-password"});
  next();
};

const createGame = async(req, res, next) => {
  try {
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({message: "Error creating game"});
  }
};


module.exports = {findAllGames, createGame}; 