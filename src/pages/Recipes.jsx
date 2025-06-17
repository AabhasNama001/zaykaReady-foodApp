import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Recipes = () => {
  return (
    <div>Recipes
    <Outlet/>
    </div>
  )
}

export default Recipes