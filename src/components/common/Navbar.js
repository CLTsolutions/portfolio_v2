import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
// import '../styles/Navbar.css'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   return (
      <>
         {location.pathname !== '/home' && (
            <nav className='w-full h-24 bg-white bg-opacity-75 border-b-2'>
               <ul className='h-24 flex justify-end items-center space-x-5 pr-4 uppercase tracking-wider text-gray-700 text-2xl'>
                  {/* <ul className='flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl'> */}
                  <li>
                     {/* home is hero component */}
                     <Link to='/'>Home</Link>
                  </li>
                  <li>
                     <Link to='/about'>About</Link>
                  </li>
                  <li>
                     <Link to='/skills'>Skills</Link>
                  </li>
                  <li>
                     <Link to='/resume'>Resume</Link>
                  </li>
                  <li>
                     <Link to='/projects'>Projects</Link>
                  </li>
                  <li>
                     <Link to='/contact'>Contact</Link>
                  </li>
               </ul>
            </nav>
         )}
      </>
   )
}

export default Navbar
