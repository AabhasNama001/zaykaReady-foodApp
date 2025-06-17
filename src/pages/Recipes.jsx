import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
const Recipes = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-[520px]:flex-wrap ">
        <RecipeCard />
      </div>
      <Outlet />
    </div>
  );
};

export default Recipes;
