import React, { useContext, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const {dish,setdish} = useContext(recipeContext);
  const {favDishes, setFavDishes} = useContext(recipeContext);
  
  const renderDishes = dish.map((recipeItem) => (
    <RecipeCard key={recipeItem.id} recipeData={recipeItem} dishes = {{dish,setdish}} favoriteDishes = {{favDishes,setFavDishes}} />
  ));
  console.log("hamari dish ",dish)
  return (
    <div className="  min-h-[100vh] flex justify-center gap-3 flex-wrap lg:gap-x-6 mt-10 md:mt-20 xl:mt-25">
      {dish.length > 0 ? renderDishes : "No Dishes Found"}
    </div>
  );
};

export default Recipes;
