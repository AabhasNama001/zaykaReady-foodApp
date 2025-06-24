import React, { useContext, useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { useLocation } from 'react-router-dom';
import { recipeContext } from '../context/RecipeContext';

const Fav = () => {
  const location = useLocation();
  // const [favoriteDishes, setFavoriteDishes] = useState([]) // phle yh tha bad mei recipeContext ka use kr liya 
  const {dish,setdish} = useContext(recipeContext);
   const {favDishes, setFavDishes} = useContext(recipeContext);
  const renderFavDishes = favDishes.map((favDish)=> (<RecipeCard key={favDish.id} recipeData={favDish} dishes = {{dish,setdish}} favoriteDishes = {{favDishes,setFavDishes}} />))
  useEffect(() => {
    
    const FavDishes = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavDishes(FavDishes)
   
  }, [location])
  
  return (
    <div className='flex  min-h-[100vh] justify-center gap-3 flex-wrap lg:gap-x-6 mt-10 md:mt-20 xl:mt-25'>
        {favDishes.length > 0 ? renderFavDishes : 'No Favorites...'}
        
    </div>
  )
}

export default Fav