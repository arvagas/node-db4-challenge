
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 2, description: "Cook eggs", recipe_id: 1},
        {step_number: 1, description: "Beat eggs", recipe_id: 1},
        {step_number: 4, description: "Flip the other side on top of the fillings", recipe_id: 1},
        {step_number: 3, description: "Place fillings on one side of egg pancake", recipe_id: 1},
        {step_number: 1, description: "Stretch out dough into circle", recipe_id: 2},
        {step_number: 2, description: "Spread tomato sauce", recipe_id: 2},
        {step_number: 3, description: "Layer toppings", recipe_id: 2},
        {step_number: 4, description: "Place in oven", recipe_id: 2},
        {step_number: 3, description: "Finish with top bun, flat side facing down", recipe_id: 3},
        {step_number: 2, description: "Arrange insides as you want", recipe_id: 3},
        {step_number: 1, description: "Start with bottom bun, flat side facing up", recipe_id: 3},
        {step_number: 1, description: "Cook egg until whites are fully cooked", recipe_id: 4},
      ]);
    });
};
