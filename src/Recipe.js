import React from "react";

const Recipe = (props) => {
  const { title, calories, image, ingredients } = props;
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Recipe;
