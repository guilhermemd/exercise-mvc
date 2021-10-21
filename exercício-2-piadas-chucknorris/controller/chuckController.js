const { chuckCategories, jokeBycategoryAPI } = require('../model/chuckModel.js')

const getCategories = async(_req, res) => {
  const categories = await chuckCategories();
  return res.render('categories/categoriesViews', { categories });
};

const jokeByCategory = async(req, res) => {
  const { category } = req.params;
  const jokeCategory = await jokeBycategoryAPI(category);
  return res.render('categories/jokeCategory', { jokeCategory });
};

module.exports = {
  getCategories,
  jokeByCategory,
}