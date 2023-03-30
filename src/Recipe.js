import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, servings, website }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      {/* <a>{website}</a> */}
      <img className={style.image} src={image} alt="" />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>
        Calories per recipe <i className={style.calories}>{calories}</i>
      </p>
      <p>
        Servings <i className={style.calories}>{servings}</i>
      </p>
    </div>
  );
};

export default Recipe;
