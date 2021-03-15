import React from 'react';
import Link from 'next/link';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className='pt-8 pb-16 lg:py-32'>
      <article className='flex flex-col'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-3 sm:mb-8'>
          Fullstack web developer
        </h1>
        <h3 className='order-first sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-3'>
          <Link href='/about'>
            <a>HELLO, MY NAME IS RUHUL AMIN</a>
          </Link>
        </h3>
        <p className='max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-12 sm:mb-14 text-gray-500'>
          I'm a professional freelancer. I develop outstanding websites and
          webapps with beautiful and smooth user interfaces and also a fast and
          scalable backend if needed.
        </p>
      </article>
      <Link href='/contact'>
        <a className='flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200'>
          <span className='lg:hidden'>Contact me</span>
          <span className='hidden lg:inline'>Let's work together</span>
        </a>
      </Link>
    </section>
  );
};

export default Hero;
