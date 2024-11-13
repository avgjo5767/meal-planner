import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles.css';

function RecipeInfo() {
  return (
    <div>
      {/* Add Font Awesome link in the document head */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Helmet>

      <header>
        <h1>Choose a Meal Category</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login/Register</Link>
        </nav>
      </header>

      <main className="categories">
        {/* Diet Icons Section */}
        <section className="diet-icons">
          <h2>Choose Your Meal Plan</h2>
          <div className="icon-container">
            <Link to="/recipelist" className="icon-item">
              <i className="fas fa-apple-alt"></i>
              <p>Diabetic Diet</p>
            </Link>
            <Link to="/recipelist" className="icon-item">
              <i className="fas fa-female"></i>
              <p>PCOS<br />Diet</p>
            </Link>
            <Link to="/recipelist" className="icon-item">
              <i className="fas fa-dumbbell"></i>
              <p>Workout Diet</p>
            </Link>
            <Link to="/recipelist" className="icon-item">
              <i className="fas fa-school"></i>
              <p>School Lunches</p>
            </Link>
            <Link to="/recipelist" className="icon-item">
              <i className="fas fa-cutlery"></i>
              <p>Share Your Own Recipe!</p>
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Meal Planner</p>
      </footer>
    </div>
  );
}

export default RecipeInfo;
