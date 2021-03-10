import React from 'react';
import { Link } from 'react-router-dom';
import './project-card.css';

const ProjectCard = ({ className = '', img }) => {
  return (
    <article
      className={`bg-gray-50 hover:bg-purple-50 rounded group max-w-sm ${className}`}
    >
      <div className='project-img-wrapper rounded-md p-5 relative'>
        <div className='w-1/4 absolute z-0 -right-2 sm:-right-6 -top-6'>
          <div className='project-img-bubble rounded-full' />
        </div>
        <div className='w-2/12 absolute z-0 -left-4 bottom-16'>
          <div className='project-img-bubble rounded-full' />
        </div>
        <div className='w-5 absolute z-0 -left-6 bottom-11'>
          <div className='project-img-bubble rounded-full' />
        </div>
        <img className='w-80 relative z-10 rounded-lg' src={img} alt='' />
      </div>

      <section className='project-buttons mt-8 flex items-center justify-end space-x-2'>
        <Link to='/work'>Details</Link>
        <Link to='/work'>Live website</Link>
      </section>
    </article>
  );
};

export default ProjectCard;
