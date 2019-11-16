const express = require('express')

const Ingredients = require('./ingredient-model')

const router = express.Router()

// @@@@@@@@@@ GET requests @@@@@@@@@@
router.get('/', (req, res) => {
  Ingredients.getAll()
    .then(ingreds => res.json(ingreds))
    .catch(err => res.status(500).json({ message: 'error retrieving all ingredients' }))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Ingredients.getById(id)
    .then(ingred => res.json(ingred))
    .catch(err => res.status(500).json({ message: 'error retrieving ingredient' }))
})

router.get('/:id/recipes', (req, res) => {
  const { id } = req.params

  Ingredients.onlyOneUsed(id)
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json({ message: 'error retrieving recipes using ingredient' }))
})

module.exports = router