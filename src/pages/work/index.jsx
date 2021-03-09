import React from 'react';
import Projects from './projects';
import WorkHeader from './work-header';
import WorkTags from './work-tags';

const Work = () => {
  return (
    <div className="my-8">
      <WorkHeader />
      <WorkTags />
      <Projects />
    </div>
  );
};

export default Work;
