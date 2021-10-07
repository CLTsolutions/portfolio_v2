import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { NavbarLinks, Colors } from '../data'

const SideNav = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   const navbarMapper = () => {
      return Object.keys(NavbarLinks).map((link, id) => (
         <li
            key={id}
            className='block hover:bg-lavender-dark hover:text-white transition ease-out duration-150 px-2 py-2 rounded-md uppercase tracking-wider text-gray-700 text-2xl'
         >
            <Link
               to={NavbarLinks[link]}
               onClick={linkToggle}
               className=' focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
            >
               {link}
            </Link>
         </li>
      ))
   }

   const button = () => {
      return (
         <button
            type='button'
            className='fixed z-10 text-grey-600 hover:text-grey-300 focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50 px-5 py-3'
            onClick={toggle}
         >
            {!isOpen ? (
               <AiOutlineBars size={30} className='fill-current' />
            ) : (
               <AiOutlineClose size={30} className='fill-current' />
            )}
         </button>
      )
   }

   const toggle = () => setIsOpen(!isOpen)

   const linkToggle = () => setIsOpen(false)

   const menuOpen = () => {
      if (isOpen) {
         return (
            <nav className='absolute h-full w-1/2 md:w-1/4 bg-white bg-opacity-75 pt-16'>
               <ul className='flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl'>
                  {navbarMapper()}
               </ul>
            </nav>
         )
      }
   }

   return (
      <header>
         {location.pathname === '/home' && (
            <>
               {button()}
               {menuOpen()}
            </>
         )}
      </header>
   )
}

export default SideNav
