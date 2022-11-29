const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./connection")
const constant = require('./constants/constant.json')

const controller = require("../New Project/controllers/ArticleController");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(constant.UPLOADS,express.static('uploads'));

app.use(constant.baseUrl, controller);

app.listen(constant.PORT, () => {
  console.log(constant.serverMessage);
});
