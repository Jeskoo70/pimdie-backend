const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");
const connectToDataBase = require("./database/connect");

const apiRouter = require("./routes/api");
const pagesRouter = require("./routes/page");

const PORT = 3000;
const app = express();

connectToDataBase();

app.use(
  bodyParser.json(), 
  cookieParser(),
  express.static(path.join(__dirname, "public")), 
  apiRouter,
  pagesRouter
);

app.listen(PORT, ()=> {
    console.log(`Server is running at PORT: ${PORT}`);
})