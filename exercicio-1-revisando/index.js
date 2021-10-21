const express = require("express");
const app = express();
const {getJoke} = require("./controller.js")

require('dotenv').config()

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs");

app.set("views", "./views");

app.get("/", getJoke);

app.listen(PORT,() => console.log('listen to the port' + PORT));