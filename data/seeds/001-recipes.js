
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Omelet'},
        {name: 'Pizza'},
        {name: 'Hamburger'},
        {name: 'Sunny-Side Up Eggs'}
      ]);
    });
};
