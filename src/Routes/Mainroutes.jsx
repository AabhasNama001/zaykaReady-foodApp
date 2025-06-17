import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import CreateRecipe from '../pages/CreateRecipe'
import ContactUs from '../pages/ContactUs'
import PageNotFound from '../pages/PageNotFound'
import SingleRecipe from '../pages/SingleRecipe'

const mainroutes = () => {
  return (
    <div>   
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path = '/recipes' element={<Recipes/>}>
              <Route path='/recipes/single-recipe' element={<SingleRecipe/>}/>
            </Route>
            <Route path = '/create-recipe' element={<CreateRecipe/>}/>
            <Route path = '/contact-us' element={<ContactUs/>}/>
            <Route path ='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default mainroutes