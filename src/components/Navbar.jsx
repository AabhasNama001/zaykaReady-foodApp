import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Recipes</NavLink>
        <NavLink to='/'>Create Recipe</NavLink>
        <NavLink to='/'>Contact Us</NavLink>
        <NavLink to='/'>Page Not Found</NavLink>
    </div>
  )
}

export default Navbar