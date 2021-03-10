import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import './project-card.css';

const ProjectCard = ({ className = '', img, url = '/work' }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Link
      to={url}
      className={`rounded max-w-sm ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={7}
        perspective={800}
        transitionSpeed={1500}
        tiltReverse
      >
        <div className='project-img-wrapper rounded-md p-5 relative'>
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
            className='w-80 relative z-20 rounded-lg hover:shadow-2xl transition-all duration-500 ease-out'
            src={img}
            alt=''
          />
        </div>
      </Tilt>
    </Link>
  );
};

export default ProjectCard;
