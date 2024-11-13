// src/components/AddRecipe.js
import React, { useState } from 'react';

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: 'diabetes',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(recipe).forEach((key) => {
      formData.append(key, recipe[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Recipe added successfully!');
        setRecipe({
          name: '',
          ingredients: '',
          instructions: '',
          category: 'diabetes',
          image: null,
        });
      } else {
        alert('Failed to add recipe.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Recipe Name:
        <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
      </label>
      <label>Ingredients:
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
      </label>
      <label>Instructions:
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
      </label>
      <label>Category:
        <select name="category" value={recipe.category} onChange={handleChange}>
          <option value="diabetes">Diabetes</option>
          <option value="pcos">PCOS</option>
          <option value="school lunches">School Lunches</option>
          <option value="workout diet">Workout Diet</option>
          <option value="light eats">Light Eats</option>
        </select>
      </label>
      <label>Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
