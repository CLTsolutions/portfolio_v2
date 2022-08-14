import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { NavbarLinks } from '../data';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);
  const linkToggle = () => setIsOpen(false);

  const navbarMapper = () => Object.keys(NavbarLinks).map((link) => (
    <li
      key={ link.id }
      className="block hover:bg-lavender-dark hover:text-white transition ease-out duration-150 px-2 py-2 rounded-md uppercase tracking-wider text-gray-700 text-2xl"
    >
      <Link
        to={ NavbarLinks[link] }
        onClick={ linkToggle }
        className=" focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50"
      >
        {link}
      </Link>
    </li>
  ));

  const button = () => (
    <button
      type="button"
      className="fixed right-0 z-10 block text-grey-600 hover:text-white transition ease-out duration-150 focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50 px-5 py-3"
      onClick={ toggle }
    >
      {!isOpen ? (
        <AiOutlineBars size={ 30 } className="fill-current" />
      ) : (
        <AiOutlineClose size={ 30 } className="fill-current" />
      )}
    </button>
  );

  const menuOpen = () => isOpen && (
  <nav className="absolute right-0 h-full w-1/2 md:w-1/4 bg-white bg-opacity-75 pt-16">
    <ul className="flex flex-col items-center space-y-5 uppercase tracking-wider text-gray-700 text-2xl">
      {navbarMapper()}
    </ul>
  </nav>
  );

  return (
    <header>
      {location.pathname === '/home' && (
        <>
          {button()}
          {menuOpen()}
        </>
      )}
    </header>
  );
};

export default SideNav;
