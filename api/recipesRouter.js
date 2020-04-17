const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req,res) => {
    Recipes.getRecipes()
    .then(rec => {
        res.status(200).json(rec);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: 'Unable to get recipes'});
    })
})

router.get('/:id/shoppinglist', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: 'Unable to get shopping list '});
    })
})

router.get("/:id/instructions", (req, res) => {
    let id = req.params.id;
  
    Recipes.getInstructions(id)
      .then(steps => {
        res.status(200).json(steps);
      })
      .catch(err => {
        res.status(500).json({ message: "failed to get steps" });
      });
  });
  
  module.exports = router;