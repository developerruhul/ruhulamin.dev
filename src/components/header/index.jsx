import React from 'react';
import Brand from '../brand';
import NavMenu from './menu';
import './style.css';

const Header = () => {
  return (
    <header className='container flex items-center justify-between py-4 md:py-12'>
      <Brand />
      <NavMenu />
    </header>
  );
};

export default Header;
