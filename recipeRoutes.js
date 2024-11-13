const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample database (in-memory for simplicity)
const recipes = [];

// Endpoint to add a new recipe
app.post('/add-recipe', (req, res) => {
  const { recipeName, description, category, photoURL } = req.body;

  if (!recipeName || !description || !category || !photoURL) {
    return res.status(400).send('All fields are required');
  }

  // Save the recipe (you can insert this into a real database)
  const newRecipe = { recipeName, description, category, photoURL };
  recipes.push(newRecipe);

  // Respond with success
  res.status(200).send({ message: 'Recipe added successfully', recipe: newRecipe });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
