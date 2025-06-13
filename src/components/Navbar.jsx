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

import foodLogoT from '../assets/foodlogoT.png';
const Navbar = () => {
  return (
    <div className='px-13 py-7 flex text-2xl justify-between items-center'>
        <NavLink to='/'><img className='h-15 ' src={foodLogoT}/></NavLink>
        <div className='flex justify-around gap-10 '> 
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/recipes'>Recipes</NavLink>
          <NavLink to='/create-recipe'>Create Recipe</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
          <NavLink to='*'>Page Not Found</NavLink>
        </div>
        {/* <div>
          <i class="ri-menu-line"></i>
          <div className='w-[100px] flex flex-col gap-10'>
              <NavLink to='/'>Home</NavLink>
            <NavLink to='/recipes'>Recipes</NavLink>
            <NavLink to='/create-recipe'>Create Recipe</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
            <NavLink to='*'>Page Not Found</NavLink>
          </div>
        </div> */}

    </div>
  )
}

export default Navbar