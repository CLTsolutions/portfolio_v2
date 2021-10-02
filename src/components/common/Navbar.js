import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { NavbarLinks } from '../data'
import { Logo } from '../../assets/'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
// import '../styles/Navbar.css'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   const toggle = () => setIsOpen(!isOpen)

   const navbarMapper = () => {
      return Object.keys(NavbarLinks).map((link, id) => (
         <li
            key={id}
            className='block hover:bg-lavender-dark hover:text-white px-2 py-2 rounded-md uppercase tracking-wider text-gray-700 text-2xl'
         >
            <Link to={NavbarLinks[link]} onClick={toggle}>
               {link}
            </Link>
         </li>
      ))
   }

   const menuOpen = () => {
      return (
         <ul className='px-4 pt-2 pb-4 bg-blush rounded-lg'>
            {navbarMapper()}
         </ul>
      )
   }

   return (
      <header>
         {location.pathname !== '/home' && (
            <nav className='md:flex md:items-center md:justify-between w-full bg-opacity-75 border-b-2'>
               <ul className='flex items-center justify-between px-5 py-3'>
                  <>
                     <img src={Logo} alt='Logo' className='h-20' />
                  </>
                  <>
                     <button
                        type='button'
                        className='md:hidden block text-gray-700 hover:text-grey-300 focus:text-gray-300 focus:outline-none'
                        onClick={toggle}
                     >
                        {!isOpen ? (
                           <AiOutlineBars size={28} className='fill-current' />
                        ) : (
                           <AiOutlineClose size={28} className='fill-current' />
                        )}
                     </button>
                  </>
               </ul>
               {!isOpen ? <></> : menuOpen()}
               <ul className='hidden md:flex space-x-5 pr-4'>
                  {navbarMapper()}
               </ul>
            </nav>
         )}
      </header>
   )
}

export default Navbar
