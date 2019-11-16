const express = require('express')

const recipeRoute = require('./recipes/recipe-route')
const ingredientRoute = require('./ingredients/ingredient-route')

const server = express()
server.use(express.json())

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)

    next()
}

// @@@@@@@@@@ Global Middleware @@@@@@@@@@
server.use(logger)

// Route handling
server.use('/api/recipes', recipeRoute)
server.use('/api/ingredients', ingredientRoute)

// Hello world test
server.get('/', (req, res) => {
    res.json('Hello from node-db4-challenge!')
})

module.exports = server