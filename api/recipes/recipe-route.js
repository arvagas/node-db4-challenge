const express = require('express')

const Recipes = require('./recipe-model')

const router = express.Router()

// @@@@@@@@@@ GET requests @@@@@@@@@@
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(foods => res.json(foods))
    .catch(err => res.status(500).json({ message: 'error retrieving all recipes' }))
})

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params

  Recipes.getShoppingList(id)
    .then(list => res.json(list))
    .catch(err => res.status(500).json({ message: 'error retrieving shopping list' }))
})

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params

  Recipes.getInstructions(id)
    .then(steps => res.json(steps))
    .catch(err => res.status(500).json({ message: 'error retrieving instructions' }))
})

module.exports = router