import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import Img from 'next/image';
import cls from 'classnames';
import TagButton from '../tag-button';
import styles from './project-card.module.css';

const ProjectCard = ({ className = '', data }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Link href={data.url}>
      <a
        target='_blank'
        title='Go to live website'
        className={cls('rounded-3xl max-w-sm border', className)}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={7}
          perspective={800}
          transitionSpeed={1500}
          tiltReverse
          className={cls(styles.imgWrapper, 'rounded-t-md p-5 relative')}
        >
          <div
            style={{
              transform: hovering ? 'translateZ(10px)' : 'translateZ(0)',
            }}
            className={cls(
              'w-1/4 sm:w-2/4 absolute z-0 -right-2 sm:right-6 -top-4 transition-all duration-500 ease-out',
              { 'sm:-right-2 -top-8': hovering }
            )}
          >
            <div className={cls(styles.imgBubble, 'rounded-full')} />
          </div>
          <div
            style={{
              transform: hovering ? 'translateZ(10px)' : 'translateZ(0)',
            }}
            className='w-2/12 absolute z-0 -left-2 bottom-16 transition-transform duration-500 ease-out'
          >
            <div className={cls(styles.imgBubble, 'rounded-full')} />
          </div>
          <div
            style={{
              transform: hovering ? 'translateZ(20px)' : 'translateZ(0)',
            }}
            className='w-5 absolute z-0 -left-6 bottom-11 transition-transform duration-500 ease-out'
          >
            <div className={cls(styles.imgBubble, 'rounded-full')} />
          </div>
          <div
            style={{
              transform: hovering ? 'translateZ(20px)' : 'translateZ(0)',
            }}
            className='z-20 transition-all duration-500 ease-out'
          >
            <Img
              className='rounded-lg hover:shadow-2xl'
              src={`/images/portfolio-items/${data.img}`}
              alt={data.description}
              width={350}
              height={220}
            />
          </div>
        </Tilt>

        <article className='p-6'>
          <h3 className='font-bold text-sm tracking-tight text-purple-800'>
            {data.scope}
          </h3>
          <h2 className='text-xl font-extrabold tracking-tight text-gray-900 mt-1'>
            {data.title}
          </h2>
          <p className='mt-3'>{data.description}</p>
          <div className='mt-6'>
            {data.tags.map((tag, i) => (
              <TagButton.Inline key={tag + i} className='mr-2 mt-2'>
                {tag}
              </TagButton.Inline>
            ))}
          </div>
        </article>
      </a>
    </Link>
  );
};

export default ProjectCard;
