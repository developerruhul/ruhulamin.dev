import React from 'react';
import Brand from '../brand';
import NavMenu from './menu';
import './style.css';

const Header = () => {
  return (
    <header className='pb-12 bg-gradient-to-b from-white to-transparent z-10 fixed w-full top-0 left-0'>
      <div className='container flex items-center justify-between py-4'>
        <Brand />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
