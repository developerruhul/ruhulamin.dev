import React from 'react';
import './style.css';

const Hero = () => {
  return (
    <section className='hero pt-8 pb-16 lg:py-32'>
      <article className='flex flex-col'>
        <h1 className='text-5xl font-semibold mb-3 sm:text-8xl sm:mb-8 font-taviraj'>
          I make websites.
        </h1>
        <h3 className='order-first mb-4 text-red-500 font-bold text-lg'>
          HELLO, MY NAME IS RUHUL AMIN
        </h3>
        <p className='text-2xl font-extralight md:text-3xl '>
          I’m lead front-end developer at Codista, a software studio in Vienna.
          <br className="hidden md:flex" /> I also write about the web on my Blog and on Twitter.
        </p>
      </article>
    </section>
  );
};

export default Hero;
