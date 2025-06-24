import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import foodLogoT from '../assets/foodLogoT.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='px-5 pt-10 flex items-center text-2xl justify-between md:px-12 relative'>
      {/* Logo */}
      <NavLink to='/'><img className='h-[10vw] md:h-[5vh] lg:h-[6vh]' src={foodLogoT} /></NavLink>

      {/* Desktop Menu */}
      <div className='gap-[3vw] hidden md:flex text-[2.4vw] lg:gap-10 lg:text-2xl xl:gap-20  '>
        <NavLink to='/' className={(e)=> e.isActive?"text-[#D62828]  border-b-2  border-[#4179e2]  font-semibold":""}>Home</NavLink>
        <NavLink to='/recipes' className={(e)=> e.isActive?"text-[#D62828]  border-b-2  border-[#4179e2]  font-semibold":""}>Recipes</NavLink>
        <NavLink to='/create-recipe' className={(e)=> e.isActive?"text-[#D62828]  border-b-2  border-[#4179e2]  font-semibold":""}>Create Recipe</NavLink>
        <NavLink to='/fav' className={(e)=> e.isActive?"text-[#D62828]  border-b-2  border-[#4179e2]  font-semibold":""}>Favorites</NavLink>
        <NavLink to='/contact-us' className={(e)=> e.isActive?"text-[#D62828]  border-b-2  border-[#4179e2]  font-semibold":""}>Contact Us</NavLink>
      </div>

      {/* Burger Icon */}
      <div className='md:hidden'>
        <i
          className="ri-menu-fill text-[7vw] mr-[2vw] cursor-pointer"
          onClick={() => setIsOpen(true)}
        ></i>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70vw] bg-white z-50 py-12 px-5 transition-transform duration-500 ease-in-out  md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-5 right-5 cursor-pointer">
          <i
            className="ri-close-fill text-[7vw]"
            onClick={() => setIsOpen(false)}
          ></i>
        </div>

        {/* Mobile Nav Links */}
        <div className='flex flex-col gap-5 mt-10 text-[5.4vw] sm:text-[5vw] font-semibold sm:font-normal'>
          <NavLink to='/' onClick={() => setIsOpen(false)} className={(e)=> e.isActive?"text-[#D62828] font-semibold":""}>Home</NavLink>
          <NavLink to='/recipes' onClick={() => setIsOpen(false)} className={(e)=> e.isActive?"text-[#D62828] font-semibold":""}>Recipes</NavLink>
          <NavLink to='/create-recipe' onClick={() => setIsOpen(false)} className={(e)=> e.isActive?"text-[#D62828] font-semibold":""}>Create Recipe</NavLink>
          <NavLink to='/fav' onClick={() => setIsOpen(false)} className={(e)=> e.isActive?"text-[#D62828] font-semibold":""}>Favorites</NavLink>
          <NavLink to='/contact-us' onClick={() => setIsOpen(false)} className={(e)=> e.isActive?"text-[#D62828] font-semibold":""}>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// import foodLogoT from '../assets/foodLogoT.png'

// const Navbar = () => {
  
  
//   return (
//     <div className='px-5 pt-10 flex items-center text-2xl justify-between md:px-12'>
//       <NavLink to='/'><img className='h-[10vw] md:h-[6vh]' src={foodLogoT} /></NavLink>
//       <div className=' gap-20 hidden md:flex'>
//         <NavLink to='/'>Home</NavLink>
//         <NavLink to='/recipes'>Recipes</NavLink>
//         <NavLink to='/create-recipe'>Create Recipe</NavLink>
//         <NavLink to='/contact-us'>Contact Us</NavLink>

//       </div>
//       <div className='burgerDiv'><i  className="ri-menu-fill hamburger text-[7vw] mr-[2vw] md:hidden"></i></div>
//       <div  className='hidden smallDivceNav z-10 bg-[#ffffff] h-[100vh] w-[70vw] absolute top-0 right-[0] py-12 px-5 min-[459px]:px-10 text-xl  justify-between items-start font-semibold sm:font-normal'>
//         <div className='flex flex-col gap-2 items-start text-[5.4vw] sm:text-[5vw]'>
//           <NavLink to='/'>Home</NavLink>
//           <NavLink to='/recipes'>Recipes</NavLink>
//           <NavLink to='/create-recipe'>Create Recipe</NavLink>
//           <NavLink to='/contact-us'>Contact Us</NavLink>
//         </div>
//         <i className="ri-close-fill text-[7vw]"></i>
//       </div>

//     </div>
//   )
// }

// export default Navbar