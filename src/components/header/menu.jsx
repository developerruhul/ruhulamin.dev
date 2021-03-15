import React, { useState } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import CrossIcon from '../icons/cross';
import Hamburger from '../icons/hamburger';
import styles from './header.module.css';

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
        className={cls(
          'fixed bg-black top-0 left-0 w-full h-full flex justify-center items-center md:relative md:flex md:bg-transparent z-40',
          { hidden: !open }
        )}
      >
        <section
          onClick={() => setOpen(false)}
          className={`flex flex-col ${styles.menu} md:flex-row md:items-center`}
        >
          <Link activeClassName='active' href='/'>
            <a>Home</a>
          </Link>
          <Link activeClassName='active' href='/about'>
            <a>About</a>
          </Link>
          <Link activeClassName='active' href='/work'>
            <a>Work</a>
          </Link>
          <a href='https://blog.ruhulamin.dev' target='_blank'>
            Blog
          </a>
          <Link activeClassName='active' href='/contact'>
            <a>Contact</a>
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default NavMenu;
