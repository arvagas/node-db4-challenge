const db = require('../../data/db-config')

module.exports = {
  getAll,
  getById,
  onlyOneUsed
}

function getAll() {
  return db('ingredients')
    .then(ingreds => ingreds)
}

function getById(id) {
  return db('ingredients')
    .where({ id })
    .first()
    .then(ingred => ingred)
}

// Grabs all recipes that uses only one of its kind (quantity = 1)
function onlyOneUsed(id) {
  return db('ingredients as i')
    .join('quantities as q', 'i.id', 'q.ingredient_id')
    .join('recipes as r', 'r.id', 'q.recipe_id')
    .select('i.name as ingredient', 'r.name as recipe')
    .where({ 'i.id': id })
    .where({ 'q.quantity': 1 })
    .then(recipes => recipes)
}