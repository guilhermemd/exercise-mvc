const { jokeAPI } = require('./api.js')

const getJoke = async(_req, res) => {
  const joke = await jokeAPI();
  return res.render('viewsJokes', { joke });
};

module.exports = {
  getJoke,
}