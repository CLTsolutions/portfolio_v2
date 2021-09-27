import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const SideNav = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   useEffect(() => {}, [])

   const open = () => {
      setIsOpen(true)
   }

   const close = () => {
      setIsOpen(false)
   }

   return (
      <>
         {location.pathname === '/home' && (
            <nav className='absolute h-full w-1/4 bg-white bg-opacity-75'>
               <ul className='flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl'>
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

export default SideNav
