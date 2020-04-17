
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rec_ing').del()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ing').insert([
        { recipe_id: 1, ingredient_id: 1 },
        { recipe_id: 1, ingredient_id: 2 },
        { recipe_id: 2, ingredient_id: 2 },
        { recipe_id: 3, ingredient_id: 1 },
        { recipe_id: 3, ingredient_id: 3 }
      ]);
    });
};
