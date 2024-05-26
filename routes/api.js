const apiRouter = require("express").Router(); 

const usersRouter = require("./users");
const gamesRouter = require("./games");
const categoriesRouter = require("./categories");

apiRouter.use("/api", gamesRouter); 
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);

module.exports = apiRouter; 