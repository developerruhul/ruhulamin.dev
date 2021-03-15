import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Brand = ({ className }) => {
  return (
    <Link href='/'>
      <a
        aria-label='Go to homepage'
        className={'flex items-center ' + className}
      >
        <div className='mr-2 flex items-center'>
          <Image
            width={48}
            height={48}
            src='/images/ruhul/profile.jpg'
            alt='Ruhul Amin'
            className='rounded-full'
          />
        </div>
        <span className='text-gray-900 font-bold tracking-tighter'>
          Developer Ruhul
        </span>
      </a>
    </Link>
  );
};

export default Brand;
