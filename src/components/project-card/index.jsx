import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import TagButton from '../tag-button';
import './project-card.css';

const ProjectCard = ({ className = '', data }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Link
      title='Go to live website'
      to={data.url}
      className={`rounded-3xl max-w-sm border  ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={7}
        perspective={800}
        transitionSpeed={1500}
        tiltReverse
        className='project-img-wrapper rounded-t-md p-5 relative'
      >
        <div
          style={{
            transform: hovering ? 'translateZ(10px)' : 'translateZ(0)',
          }}
          className='w-1/4 sm:w-2/4 absolute z-0 -right-2 sm:-right-6 -top-8 transition-transform duration-500 ease-out'
        >
          <div className='project-img-bubble rounded-full' />
        </div>
        <div
          style={{
            transform: hovering ? 'translateZ(10px)' : 'translateZ(0)',
          }}
          className='w-2/12 absolute z-0 -left-4 bottom-16 transition-transform duration-500 ease-out'
        >
          <div className='project-img-bubble rounded-full' />
        </div>
        <div
          style={{
            transform: hovering ? 'translateZ(20px)' : 'translateZ(0)',
          }}
          className='w-5 absolute z-0 -left-6 bottom-11 transition-transform duration-500 ease-out'
        >
          <div className='project-img-bubble rounded-full' />
        </div>
        <img
          style={{
            transform: hovering ? 'translateZ(20px)' : 'translateZ(0)',
          }}
          className='w-full min-w-80 relative z-20 rounded-lg hover:shadow-2xl transition-all duration-500 ease-out'
          src={data.img}
          alt=''
        />
      </Tilt>

      <article className='p-5'>
        <h3 className='font-bold text-purple-800'>{data.scope}</h3>
        <p className='mt-2'>{data.description}</p>
        <div className='mt-5 mb-1'>
          {data.tags.map((tag, i) => (
            <TagButton.Inline key={tag + i} className='mr-2'>
              {tag}
            </TagButton.Inline>
          ))}
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
