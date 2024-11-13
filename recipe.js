// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: false, // Photo URL is optional; adjust as needed
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
