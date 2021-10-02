import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { NavbarLinks } from '../data'
// import '../styles/Navbar.css'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const location = useLocation()

   const navbarMapper = () => {
      return Object.keys(NavbarLinks).map((link, id) => (
         <li
            className='hover:bg-lavender-dark hover:text-white px-3 py-2 rounded-md uppercase tracking-wider text-gray-700 text-2xl'
            key={id}
         >
            <Link to={NavbarLinks[link]}>{link}</Link>
         </li>
      ))
   }

   const mobile = () => {
      return (
         <ul className='h-24 space-x-5 pr-4 uppercase tracking-wider text-gray-700 text-2xl hidden'></ul>
      )
   }

   const web = () => {
      return (
         <ul className='h-24 flex justify-end items-center space-x-5 pr-4 uppercase tracking-wider text-gray-700 text-2xl'></ul>
      )
   }

   return (
      <>
         {location.pathname !== '/home' && (
            <nav className='w-full h-24 bg-red bg-opacity-75 border-b-2'>
               <ul className='h-24 flex justify-end items-center space-x-5 pr-4'>
                  {/* <ul className='flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl'> */}
                  {navbarMapper()}
               </ul>
            </nav>
         )}
      </>
   )
}

export default Navbar
