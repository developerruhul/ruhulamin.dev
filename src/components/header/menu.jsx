import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CrossIcon from '../icons/cross';
import Hamburger from '../icons/hamburger';

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button
        onClick={() => setOpen(!open)}
        className='w-auto bg-gray-900 rounded-full p-2 hover:bg-gray-700 transition-colors duration-100 focus-within:outline-none z-50 relative md:hidden'
      >
        {open ? (
          <CrossIcon className="w-8 text-gray-900'" />
        ) : (
          <Hamburger className='w-8 text-white' />
        )}
      </button>
      <div
        className={`fixed bg-black top-0 left-0 w-full h-full flex justify-center items-center ${
          open ? '' : 'hidden'
        } md:relative md:flex md:bg-transparent `}
      >
        <section className='flex flex-col nav__menu md:flex-row md:items-center'>
          <NavLink activeClassName='active' exact to='/'>
            Home
          </NavLink>
          <NavLink activeClassName='active' exact to='/about'>
            About
          </NavLink>
          <NavLink activeClassName='active' exact to='/portfolio'>
            Portfolio
          </NavLink>
          <a href='https://blog.ruhulamin.dev' target='_blank'>
            Blog
          </a>
          <NavLink activeClassName='active' exact to='/contact'>
            Contact
          </NavLink>
        </section>
      </div>
    </nav>
  );
};

export default NavMenu;
