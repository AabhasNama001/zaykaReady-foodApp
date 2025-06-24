import React from 'react'
import { NavLink } from 'react-router-dom'
import foodLogoT from '../assets/foodLogoT.png';
const Footer = () => {
    return (
        <div className='bg-[#f9f4ed] xl:px-25 md:px-12 '>
            <footer className=" text-left py-10 px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[250px_1fr_1fr_300px] xl:grid-cols-[1fr_1fr_1fr_1fr]">
                <div className='text-sm md:text-xl'>
                    <NavLink to='/'><img className='h-[10vw] sm:h-[6vw] mb-3 md:h-[5vh] lg:h-[4.5vh] ' src={foodLogoT} /></NavLink>
                    <p className=" text-gray-600 md:max-w-[300px]  lg:w-[240px]">
                       You dream it, we cook it.<br>
                       </br>
                       Custom-made dishes, ready when you arrive.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <i className="ri-facebook-fill text-xl"></i>
                        <i className="ri-google-fill text-xl"></i>
                        <i className="ri-instagram-fill text-xl"></i>
                    </div>
                </div>
                <div className='text-sm md:text-xl'>
                    <h5 className="font-semibold  mb-2 text-2xl">ABOUT US</h5>
                    <ul className=" text-gray-700 space-y-1 ">
                        <li>Our Locations</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='text-sm md:text-xl'>
                    <h5 className="font-semibold mb-2 text-2xl">OUR MENU</h5>
                    <ul className=" text-gray-700 space-y-1">
                        <li>Burger</li>
                        <li>Pizza</li>
                        <li>Chinese</li>
                        <li>Shakes</li>
                        <li>Create Recipe</li>
                        <li>Recipes</li>
                        <li>Favorites</li>
                    </ul>
                </div>
                <div className='text-sm md:text-xl'>
                    <h5 className="font-semibold mb-2 text-2xl">CONTACT US</h5>
                    <ul className=" text-gray-700 space-y-1">
                        <li>Timings :</li>
                        <li>Monday to Friday / 10am to 6pm</li>
                        <li>Address :</li>
                        <li>1, Aerocity, Ground Floor,
                            Office no: 02/03, Safed Pul,
                            Sakinaka, Andheri Kurla Rd,
                            Andheri East, Mumbai
                            400072.</li>
                        <li>123y@yopmai.com</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer