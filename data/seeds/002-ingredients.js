
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'eggs'},
        {name: 'onions'},
        {name: 'lettuce'},
        {name: 'tomatoes'},
        {name: 'beef patty'},
        {name: 'bacon'},
        {name: 'pepperoni'},
        {name: 'mushrooms'},
        {name: 'buns'},
        {name: 'cheese'},
        {name: 'pizza dough'},
      ]);
    });
};
