// src/components/RecipeCard.jsx

import React from "react";
import styles from "../Styles/RecipeCard.module.css";

const RecipeCard = ({ title, title2, ingredients, instructions }) => {
  return (
    <div className={styles["recipe-card"]}>
      <h1>{title}</h1> 
      <h2>{title2}</h2>
      <ul> 
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipeCard;
