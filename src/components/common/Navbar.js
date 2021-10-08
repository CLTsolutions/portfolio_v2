import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { Logo } from '../../assets/'
import { NavbarLinks, Colors } from '../data'
// import '../styles/Navbar.css'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()
   const path = location.pathname === '/home'

   const homeNavbar =
      'absolute md:flex md:items-center md:justify-between w-full bg-opacity-75'
   const navbar =
      'md:flex md:items-center md:justify-between w-full bg-opacity-75 border-b-2'
   const homeLink =
      'hover:bg-blue-dark hover:bg-opacity-75 hover:text-white rounded transition duration-150 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blush-light focus:ring-opacity-50 uppercase tracking-wider text-gray-700 text-2xl'
   const navLink =
      'hover:bg-lavender-dark hover:text-white rounded transition duration-150 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50 uppercase tracking-wider text-gray-700 text-2xl'

   const navbarMapper = () => {
      return Object.keys(NavbarLinks).map((link, id) => (
         <li key={id} className='block px-2 py-2'>
            <NavLink
               className={path ? homeLink : navLink}
               // activeClassName='pb-1 border-b-2 border-blue'
               activeStyle={{
                  borderBottom: `2px solid ${Colors.blue}`,
                  paddingBottom: `.3rem`,
               }}
               onClick={linkToggle}
               exact
               to={NavbarLinks[link]}
            >
               {link}
            </NavLink>
         </li>
      ))
   }

   const button = () => {
      return (
         <button
            type='button'
            className='md:hidden block text-grey-600 hover:bg-lavender-dark hover:text-white transition ease-out duration-150 px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
            onClick={toggle}
         >
            {!isOpen ? (
               <AiOutlineBars size={28} className='fill-current' />
            ) : (
               <AiOutlineClose size={28} className='fill-current' />
            )}
         </button>
      )
   }

   const linkToggle = () => setIsOpen(false)

   const toggle = () => setIsOpen(!isOpen)

   const menuOpen = () => {
      return (
         isOpen && (
            <ul className='px-4 pt-2 pb-4 bg-blush rounded-lg ease-in-out'>
               {navbarMapper()}
            </ul>
         )
      )
   }

   return (
      <header>
         <nav className={path ? homeNavbar : navbar}>
            <ul className='flex items-center justify-between px-5 py-3'>
               <li className=''>
                  <Link
                     to='/home'
                     className='focus:outline-none focus:ring-2 focus:ring-blush-light focus:ring-opacity-50'
                  >
                     <img
                        src={Logo}
                        alt='Logo'
                        className='h-20 md:pl-4 transform hover:transition duration-500 hover:scale-125 focus:outline-none'
                     />
                  </Link>
               </li>
               <li>{button()}</li>
            </ul>
            {menuOpen()}
            <ul className='hidden md:flex space-x-5 pr-4'>{navbarMapper()}</ul>
         </nav>
      </header>
   )
}

export default Navbar
