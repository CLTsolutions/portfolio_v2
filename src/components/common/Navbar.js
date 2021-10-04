import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { NavbarLinks, Colors } from '../data'
import { Logo } from '../../assets/'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
// import '../styles/Navbar.css'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   const toggle = () => setIsOpen(!isOpen)

   const linkToggle = () => setIsOpen(false)

   const navbarMapper = () => {
      return Object.keys(NavbarLinks).map((link, id) => (
         <li
            key={id}
            className='block hover:bg-lavender-dark hover:text-white transition ease-out duration-150 px-2 py-2 rounded-md uppercase tracking-wider text-gray-700 text-2xl'
         >
            <NavLink
               exact
               to={NavbarLinks[link]}
               onClick={linkToggle}
               className=' focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
               // activeClassName='pb-1 border-b-2 border-blue'
               activeStyle={{
                  borderBottom: `2px solid ${Colors.blue}`,
                  paddingBottom: `.3rem`,
               }}
            >
               {link}
            </NavLink>
         </li>
      ))
   }

   const menuOpen = () => {
      return (
         <ul className='px-4 pt-2 pb-4 bg-blush rounded-lg transition-all duration-500 ease-in-out'>
            {navbarMapper()}
         </ul>
      )
   }

   return (
      <header>
         {location.pathname !== '/home' && (
            <nav className='md:flex md:items-center md:justify-between w-full bg-opacity-75 border-b-2 transition-all ease-out duration-500'>
               <ul className='flex items-center justify-between px-5 py-3'>
                  <>
                     <Link
                        to='/home'
                        className='focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
                     >
                        <img
                           src={Logo}
                           alt='Logo'
                           className='h-20 md:pl-4 transform hover:transition duration-500 hover:scale-125'
                        />
                     </Link>
                  </>
                  <>
                     <button
                        type='button'
                        className='md:hidden block text-grey-600 hover:text-grey-300 focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
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
