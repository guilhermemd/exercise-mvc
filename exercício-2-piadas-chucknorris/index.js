const express = require("express");
const app = express();
const {getCategories, jokeByCategory} = require("./controller/chuckController");
const path = require('path');

require('dotenv').config()

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'));

app.get("/categories", getCategories);

app.get('/', (_req, res) => {
  res.redirect('/categories')
});

app.get('/jokes/:category', jokeByCategory);

app.listen(PORT,() => console.log('listen to the port' + PORT));