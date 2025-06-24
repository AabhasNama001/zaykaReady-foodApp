import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [dish, setdish] = useState([]);
  const [favDishes, setFavDishes] = useState([]);
  
  useEffect(() => {
    setdish(JSON.parse(localStorage.getItem("dishes")) || []);
    setFavDishes(JSON.parse(localStorage.getItem('favorites')) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ dish, setdish, favDishes, setFavDishes }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
