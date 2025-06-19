import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [dish, setdish] = useState([]);

  useEffect(() => {
    setdish(JSON.parse(localStorage.getItem("dishes")) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ dish, setdish }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
