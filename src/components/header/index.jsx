import React from 'react';
import Brand from '../brand';
import NavMenu from './menu';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className='pb-12 bg-gradient-to-b from-white to-transparent z-30 fixed w-full top-0 left-0'>
      <div className='container flex items-center justify-between py-4'>
        <Brand />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
