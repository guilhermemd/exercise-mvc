const { chuckCategories } = require('../model/chuckModel.js')

const getCategories = async(_req, res) => {
  const categories = await chuckCategories();
  return res.render('categories/categoriesViews', { categories });
};

module.exports = {
  getCategories,
}