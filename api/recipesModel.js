const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList() {
    return db('recipes as r')
    .join("rec_ing as ri", "ri.recipe_id", "r.id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("r.name", "i.name", "i.quantity")
    .where("r.id", id);
}

function getInstructions(id) {
    return db("recipes as r")
      .join("steps as s", "s.recipe_id", "r.id")
      .select("r.name", "s.step_number", "s.description")
      .where("r.id", id)
      .orderBy("s.step_number");
  }