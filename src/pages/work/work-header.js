import React from 'react';

const WorkHeader = () => {
  return (
    <article className='space-y-4 w-full mx-auto text-center'>
      <h1 className='mx-auto text-center text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-16 sm:mb-28'>
        Full-stack web developer <br/> portfolio
      </h1>
      <div className="text-left max-w-4xl">
        <p className='sm:text-lg font-medium lg:text-xl lg:leading-9 space-y-5 mb-5 text-left'>
          From beautiful landing pages to full blown web application, React.JS,
          Node.JS, TailwindCSS, Bootstrap. Check out my latest web software
          development portfolio projects.
        </p>
        <p className='text-xs text-left mt-2 sm:mt-6'>
          I'm currently adding projects to my portfolio. It'll be great if you
          come back after <b>April 15</b> to see my full potential.
        </p>
      </div>
    </article>
  );
};

export default WorkHeader;
