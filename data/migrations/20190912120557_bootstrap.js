
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
    })
    .createTable('quantities', tbl => {
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
      tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients')
      tbl.primary(['recipe_id', 'ingredient_id'])
      tbl.decimal('quantity').notNullable()
    })
    .createTable('instructions', tbl => {
      tbl.increments()
      tbl.integer('step_number').notNullable()
      tbl.string('description').notNullable()
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
    })
}

exports.down = function(knex) {
  return knex.scheme
    .dropTableIfExists('instructions')
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
}
