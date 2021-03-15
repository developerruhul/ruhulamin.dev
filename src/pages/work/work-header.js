import React from 'react';

const WorkHeader = () => {
  return (
    <article className='space-y-4'>
      <h1 className='text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-7'>
        Full-stack web developer portfolio
      </h1>
      <p className='max-w-4xl sm:text-lg lg:text-xl font-medium lg:leading-9 space-y-5 mb-5'>
        From beautiful landing pages to full blown web application, React.JS,
        Node.JS, TailwindCSS, Bootstrap. Check out my latest web software
        development portfolio projects.
      </p>
      <sub>
        I'm currently adding projects to my portfolio. It'll be great if you
        come back after <b>April 5</b> to see my full potential.
      </sub>
    </article>
  );
};

export default WorkHeader;
