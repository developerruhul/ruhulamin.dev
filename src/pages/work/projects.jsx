import React from 'react';
import ProjectCard from '../../components/project-card';

const Projects = () => {
  return (
    <section className='mt-20 grid grid-cols-1 justify-items-center lg:justify-items-start gap-y-10 md:gap-x-12 md:grid-cols-2 lg:grid-cols-3'>
      {[
        'https://res.cloudinary.com/deirqouhr/image/upload/v1607262312/chrome_Pv1TUDzLXx_1_pyusuk.png',
        'https://res.cloudinary.com/deirqouhr/image/upload/v1607262312/chrome_Pv1TUDzLXx_1_pyusuk.png',
        'https://res.cloudinary.com/deirqouhr/image/upload/v1607262312/chrome_Pv1TUDzLXx_1_pyusuk.png',
        'https://res.cloudinary.com/deirqouhr/image/upload/v1607262312/chrome_Pv1TUDzLXx_1_pyusuk.png',
        'https://res.cloudinary.com/deirqouhr/image/upload/v1607262312/chrome_Pv1TUDzLXx_1_pyusuk.png',
      ].map((url,i) => {
        return (
          <ProjectCard key={i} img={url} />
        );
      })}
    </section>
  );
};

export default Projects;
