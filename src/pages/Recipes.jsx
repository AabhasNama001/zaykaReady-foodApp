import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const { dish } = useContext(recipeContext);

  const renderDishes = dish.map((recipeItem) => (
    <RecipeCard key={recipeItem.id} recipeData={recipeItem} />
  ));

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap lg:gap-x-6">
      {dish.length > 0 ? renderDishes : "No Dishes Found"}
    </div>
  );
};

export default Recipes;
