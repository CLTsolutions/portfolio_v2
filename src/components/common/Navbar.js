import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { NavbarLinks } from '../data'

// import '../styles/Navbar.css'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   const navbarMapper = () => {
      return NavbarLinks?.map((link, id) => (
         <li className='w-full h-24 bg-white bg-opacity-75 border-b-2' key={id}>
            <Link to={`/${link}`}>Home</Link>
         </li>
      ))
   }

   return (
      <>
         {location.pathname !== '/home' && (
            <nav className='w-full h-24 bg-white bg-opacity-75 border-b-2'>
               <ul className='h-24 flex justify-end items-center space-x-5 pr-4 uppercase tracking-wider text-gray-700 text-2xl'>
                  {/* <ul className='flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl'> */}
                  <li className='hover:bg-lavender-dark hover:text-white'>
                     {/* home is hero component */}
                     <Link to='/'>Home</Link>
                  </li>
                  {/* {navbarMapper()} */}
                  {/* <li className='hover:bg-lavender-dark hover:text-white'>
                     <Link to='/about'>About</Link>
                  </li>
                  <li className='hover:bg-lavender-dark hover:text-white'>
                     <Link to='/skills'>Skills</Link>
                  </li>
                  <li className='hover:bg-lavender-dark hover:text-white'>
                     <Link to='/resume'>Resume</Link>
                  </li>
                  <li className='hover:bg-lavender-dark hover:text-white'>
                     <Link to='/projects'>Projects</Link>
                  </li>
                  <li className='hover:bg-lavender-dark hover:text-white'>
                     <Link to='/contact'>Contact</Link>
                  </li> */}
               </ul>
            </nav>
         )}
      </>
   )
}

export default Navbar
