
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
      {step_number: "1", description: "Knead dough", recipe_id: 1 },
      {step_number: "2", description: "Place condiments on pizza", recipe_id: 1 },
      {step_number: "3", description: "Bake for 20 minutes", recipe_id: 1 },

        {step_number: "1", description: "Drive to InNOut", recipe_id: 2 },
        {step_number: "2", description: "Buy delicious hamburger",recipe_id: 2},

        { step_number: "1", description: "Boil egg", recipe_id: 3 },
        { step_number: "2", description: "Cover egg in ground beef", recipe_id: 3},
        { step_number: "3", description: "Roll the ball in bread and coat with yolk", recipe_id: 3 },
        { step_number: "4", description: "Bake for 15 minutes", recipe_id: 3 }
      ]);
    });
};
