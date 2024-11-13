// client/src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.css'; // Import the CSS file


const RecipeList = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`http://localhost:5000/recipes?category=${category}`);
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, [category]);
  return (
    <div>
      <header>
        <h1>OneStopGo</h1>
        <h2>{category} Recipes</h2>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login/Register</Link>
        </nav>
      </header>
  
      <main>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      </main>
      <bgimg></bgimg>
      <footer>
        <p>&copy; 2024 Meal Planner</p>
      </footer>
    </div>
  );
}

export default RecipeList;
