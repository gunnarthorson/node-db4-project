
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "pizza", quantity: 2 },
        { name: "hamburger", quantity: 1 },
        { name: "scotch eggs", quantity: 4 }
      ]);
    });
};
