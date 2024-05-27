const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  if(req.query["categories.name"]) { 
    req.gamesArray = await games.findGameByCategory(req.query["categories.name"]);
    next();
    return;
  }
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password"
    })
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

const findGameById = async (req, res, next) => {
  try {
    req.game = await games
      .findById(req.params.id) 
      .populate("categories") 
      .populate("users"); 
    next();
  } catch (error) {
    res.status(404).send({ message: "Game not found" });
  }
}; 

const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send(JSON.stringify({ message: "Error updating game" }));
  }
}; 

const deleteGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send({ message: "Error deleting game" });
  }
}; 


const checkEmptyFields = async (req, res, next) => {
  if(req.isVoteRequest) {
    next();
    return;
  } 

  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.image ||
    !req.body.link ||
    !req.body.developer
  ) {
    // Если какое-то из полей отсутствует, то не будем обрабатывать запрос дальше,
    // а ответим кодом 400 — данные неверны.
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
  } else {
    // Если всё в порядке, то передадим управление следующим миддлварам
    next();
  }
}; 

const checkIfCategoriesAvaliable = async (req, res, next) => {
  // Проверяем наличие жанра у игры
  if(req.isVoteRequest) {
    next();
    return;
  } 
if (!req.body.categories || req.body.categories.length === 0) {
  res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
} else {
  next();
}
}; 

const checkIfUsersAreSafe = async (req, res, next) => {
  // Проверим, есть ли users в теле запроса
if (!req.body.users) {
  next();
  return;
}
if (req.body.users.length - 1 === req.game.users.length) {
  next();
  return;
} else {
  res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
}
}; 

const checkIsGameExists = async (req, res, next)=>{
  const isInArray = req.gamesArray.find((game)=>{
    return req.body.title === game.title||
    req.body.description === game.description||
    req.body.developer === game.developer||
    req.body.image === game.image||
    req.body.link === game.link;
  });
  if (isInArray){
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({message:"Такая игра уже существует"}));
  } else {
    next();
  }
}; 

const checkIsVoteRequest = async (req, res, next) => {
  if (Object.keys(req.body).length === 1 && req.body.users) {
    req.isVoteRequest = true;
  }
  next();
  };

module.exports = {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest};  