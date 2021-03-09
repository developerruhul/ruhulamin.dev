import React from 'react';
import { Link } from 'react-router-dom';
import './project-card.css';

const ProjectCard = ({ className = '', img }) => {
  return (
    <article
      className={`bg-gray-50 hover:bg-purple-50 border transition-colors duration-200 rounded py-8 px-12 lg:p-12 pb-8 group max-w-sm ${className}`}
    >
      <div className='project-img-wrapper rounded-md p-5 relative'>
        <div className='w-2/4 absolute z-0 -right-12 -top-12'>
          <div className='project-img-bubble rounded-full' />
        </div>
        <div className='w-1/4 absolute z-0 -left-8 bottom-10'>
          <div className='project-img-bubble rounded-full' />
        </div>
        <div className='w-4 absolute z-0 -left-8 bottom-8'>
          <div className='project-img-bubble rounded-full' />
        </div>
        <img className='w-80 relative z-10 rounded-lg' src={img} alt='' />
      </div>

      <section className='mt-12 flex flex-col space-y-2'>
        <Link
          className='text-center bg-gray-50 text-gray-900 bg-opacity-60 border-2 text-lg leading-6 font-semibold py-3 px-6 rounded-xl transition-colors duration-200'
          to='/work'
        >
          Details
        </Link>
        <Link
          className='text-center bg-purple-900 hover:bg-purple-700 text-white text-lg leading-6 font-semibold py-3 px-6 border rounded-xl transition-colors duration-200'
          to='/work'
        >
          Live website
        </Link>
      </section>
    </article>
  );
};

export default ProjectCard;
