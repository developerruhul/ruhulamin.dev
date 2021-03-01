import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../images/ruhul/profile.jpg';
import './style.css';
import NavMenu from './menu';

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 md:p-12'>
      <Link to='/' aria-label='Go to homepage' className='flex items-center'>
        <img
          className='w-12 rounded-full mr-2'
          src={Profile}
          alt='Ruhul Amin'
        />
        <span className='font-bold'>Ruhul Amin</span>
      </Link>

      <NavMenu />
    </header>
  );
};

export default Header;
