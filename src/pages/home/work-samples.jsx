import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project-card';

const WorkSamples = () => {
  return (
    <section className='my-20'>
      <article className='text-center'>
        <h3 className='text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-3'>
          Work samples
        </h3>
        <div className='font-medium sm:font-semibold'>
          <Link className='underline-effect' to='/work'>
            Go to work page
          </Link>{' '}
          to see more of my work.
        </div>
      </article>

      <section className='mt-14 sm:mt-20 grid grid-cols-1 justify-items-center gap-y-14 md:gap-x-14 md:grid-cols-2 lg:grid-cols-3'>
        {[
          'https://res.cloudinary.com/deirqouhr/image/upload/v1607195476/Frame_11_1_p2efpe.png',
          'https://res.cloudinary.com/deirqouhr/image/upload/v1607195476/Frame_11_1_p2efpe.png',
          'https://res.cloudinary.com/deirqouhr/image/upload/v1607195476/Frame_11_1_p2efpe.png',
        ].map((url, i) => {
          return <ProjectCard key={i} img={url} />;
        })}
      </section>
    </section>
  );
};

export default WorkSamples;
