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

   const navbarMapper = () => {
      return Object.keys(NavbarLinks).map((link, id) => (
         <li
            className='block hover:bg-lavender-dark hover:text-white px-2 py-2 rounded-md uppercase tracking-wider text-gray-700 text-2xl'
            key={id}
         >
            <Link to={NavbarLinks[link]}>{link}</Link>
         </li>
      ))
   }

   const toggle = () => {
      setIsOpen(!isOpen)
   }

   const menuOpen = () => {
      return (
         <ul className='px-4 pt-2 pb-4'>
            {/* <ul className='h-24 flex justify-end items-center space-x-5 pr-4'> */}
            {/* <ul className='flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl'> */}
            {navbarMapper()}
         </ul>
      )
   }

   const web = () => {
      return (
         <ul className='h-24 flex justify-end items-center space-x-5 pr-4 uppercase tracking-wider text-gray-700 text-2xl'></ul>
      )
   }

   return (
      <header>
         {location.pathname !== '/home' && (
            <nav className='w-full bg-opacity-75 border-b-2'>
               <ul className='flex items-center justify-between px-5 py-3'>
                  <>
                     <img src={Logo} alt='Logo' className='h-20' />
                  </>
                  <>
                     <button
                        type='button'
                        className='block text-gray-700 hover:text-grey-300 focus:text-gray-300 focus:outline-none'
                        onClick={toggle}
                     >
                        <AiOutlineBars size={28} className='fill-current' />
                     </button>
                  </>
               </ul>
               {isOpen ? menuOpen() : <></>}
            </nav>
         )}
      </header>
   )
}

export default Navbar
