const db = require('../../data/db-config')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
    .then(recipes => recipes)
}

function getShoppingList(recipe_id) {
  return db('recipes as r')
    .join('quantities as q', 'r.id' , 'q.recipe_id')
    .join('ingredients as i', 'i.id' , 'q.ingredient_id')
    .select('i.name', 'q.quantity')
    .where({ recipe_id })
    .then(ingreds => ingreds)
}

function getInstructions(recipe_id) {
  return db('recipes as r')
  .join('instructions as i', 'r.id' , 'i.recipe_id')
  .select('r.name', 'i.step_number', 'i.description')
  .where({ recipe_id })
  .orderBy('i.step_number', 'asc')
  .then(steps => steps)
}