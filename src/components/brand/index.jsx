import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../images/ruhul/profile_small.webp';

const Brand = ({ className }) => {
  return (
    <Link
      to='/'
      aria-label='Go to homepage'
      className={'flex items-center ' + className}
    >
      <img className='w-12 rounded-full mr-2' src={Profile} alt='Ruhul Amin' />
      <span className='text-gray-900 font-bold tracking-tighter'>Developer Ruhul</span>
    </Link>
  );
};

export default Brand;
