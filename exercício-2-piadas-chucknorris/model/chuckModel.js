const axios = require("axios");

async function chuckCategories() {
  const URL = "https://api.chucknorris.io/jokes/categories";
  return (await axios(URL)).data;
}

const jokeBycategoryAPI = async(category) => {
  const URL = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const result =  (await axios(URL)).data.value;
  return result;
}
module.exports = { chuckCategories, jokeBycategoryAPI };