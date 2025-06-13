import React from 'react'
import { NavLink } from 'react-router-dom'
import foodLogoT from '../assets/foodLogoT.png'
const Navbar = () => {
  return (
    <div className='px-20 pt-10 pb-6 flex items-center text-2xl  justify-between '>
         <NavLink to='/'><img className='h-[6vh]' src={foodLogoT}/></NavLink>
        <div className='flex gap-10'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/recipes'>Recipes</NavLink>
            <NavLink to='/create-recipe'>Create Recipe</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
            
        </div>
    </div>
  )
}

export default Navbar