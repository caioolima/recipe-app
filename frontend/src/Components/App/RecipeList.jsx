import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import styles from "../Styles/RecipeList.module.css";
import { useTranslation } from "react-i18next";

const recipes = [
  {
    id: 1,
    title: {
      "pt-BR": "Bolo de Chocolate",
      "en-US": "Chocolate Cake",
      "es-ES": "Pastel de Chocolate",
    },
    title2: {
      "pt-BR": "Ingredientes",
      "en-US": "Ingredients",
      "es-ES": "Ingredientes",
    },
    ingredients: {
      "pt-BR": ["Chocolate", "Farinha", "Açúcar", "Ovos"],
      "en-US": ["Chocolate", "Flour", "Sugar", "Eggs"],
      "es-ES": ["Chocolate", "Harina", "Azúcar", "Huevos"],
    },
    instructions: {
      "pt-BR": "Misture todos os ingredientes e asse a 180°C por 30 minutos.",
      "en-US": "Mix all the ingredients and bake at 180°C for 30 minutes.",
      "es-ES": "Mezcla todos los ingredientes y hornea a 180°C por 30 minutos.",
    },
  },
  {
    id: 2,
    title: {
      "pt-BR": "Sopa de Legumes",
      "en-US": "Vegetable Soup",
      "es-ES": "Sopa de Verduras",
    },
    title2: {
      "pt-BR": "Ingredientes",
      "en-US": "Ingredients",
      "es-ES": "Ingredientes",
    },
    ingredients: {
      "pt-BR": ["Cenoura", "Batata", "Abóbora", "Caldo de legumes"],
      "en-US": ["Carrot", "Potato", "Pumpkin", "Vegetable broth"],
      "es-ES": ["Zanahoria", "Patata", "Calabaza", "Caldo de verduras"],
    },
    instructions: {
      "pt-BR":
        "Cozinhe os legumes em água fervente com caldo de legumes por 20 minutos.",
      "en-US":
        "Cook the vegetables in boiling water with vegetable broth for 20 minutes.",
      "es-ES":
        "Cocina las verduras en agua hirviendo con caldo de verduras durante 20 minutos.",
    },
  },
];

const RecipeList = () => {
  const { t, i18n } = useTranslation();
  const [userLanguage, setUserLanguage] = useState(
    localStorage.getItem("userLanguage") || "pt-BR"
  );

  useEffect(() => {
    i18n.changeLanguage(userLanguage);
    localStorage.setItem("userLanguage", userLanguage);
  }, [userLanguage, i18n]);

  const changeLanguage = (language) => {
    setUserLanguage(language);
  };

  return (
    <div className={styles["recipe-list"]}>
      <header className={styles["App-header"]}>
        <h1>{t("recipes_title")}</h1>
        <p>{t("recipes_subtitle")}</p>
      </header>
      <div className={styles["recipe-cards"]}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={t(recipe.title[userLanguage])} // Acessando o título no idioma correto
            title2={t(recipe.title2[userLanguage])} // Acessando o título2 no idioma correto
            ingredients={recipe.ingredients[userLanguage].map((ingredient) => t(ingredient))} // Acessando os ingredientes no idioma correto
            instructions={t(recipe.instructions[userLanguage])} // Acessando as instruções no idioma correto
          />
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles["language-buttons"]}>
          <button
            className={userLanguage === "pt-BR" ? styles.active : ""}
            onClick={() => changeLanguage("pt-BR")}
          >
            {t("portuguese")}
          </button>
          <button
            className={userLanguage === "en-US" ? styles.active : ""}
            onClick={() => changeLanguage("en-US")}
          >
            {t("english")}
          </button>
          <button
            className={userLanguage === "es-ES" ? styles.active : ""}
            onClick={() => changeLanguage("es-ES")}
          >
            {t("spanish")}
          </button>
        </div>

        <p>&copy; {t("developer")}</p>
      </footer>
    </div>
  );
};

export default RecipeList;
