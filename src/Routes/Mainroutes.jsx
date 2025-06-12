import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Recipes from '../pages/Recipes.jsx'
import CreateRecipe from '../pages/CreateRecipe.jsx'
import ContactUs from '../pages/ContactUs.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'
const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path = '/recipes' element={<Recipes/>}/>
            <Route path = '/create-recipe' element={<CreateRecipe/>}/>
            <Route path = '/contact-us' element={<ContactUs/>}/>
            <Route path ='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes