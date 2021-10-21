const axios = require("axios");
const URL = "https://api.chucknorris.io/jokes/categories";

async function chuckCategories() {
  return (await axios(URL)).data;
}
module.exports = { chuckCategories };