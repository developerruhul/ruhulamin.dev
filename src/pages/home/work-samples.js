import React from 'react';
import Link from 'next/link';
import ProjectCard from '../../components/project-card';
import projects from '../../data/projects';

const WorkSamples = () => {
  return (
    <section className='mb-20 sm:mb-10 container section-margin-top'>
      <article className="text-center">
        <h3 className='text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
          Work samples
        </h3>
        <div className='font-medium sm:font-semibold'>
          <Link href='/work'>
            <a className='underline-effect'>Go to work page</a>
          </Link>{' '}
          to see more of my work.
        </div>
      </article>

      <section className='mt-16 sm:mt-24 grid grid-cols-1 items-start justify-items-center gap-y-14 md:gap-x-14 md:grid-cols-2 lg:grid-cols-3'>
        {projects.featured.map((id) => {
          return <ProjectCard key={id} data={projects.data[id]} />;
        })}
      </section>
    </section>
  );
};

export default WorkSamples;
