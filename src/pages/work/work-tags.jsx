import React from 'react';
import TagButton from '../../components/tag-button/index.jsx';
import data from '../../data/projects.js';

const WorkTags = () => {
  return (
    <ul className='max-w-2xl my-6 space-y-6 '>
      {data.tags.map((tag) => {
        return (
          <li key={tag} className='inline-block mr-2' title={`Filter by ${tag}`}>
            <TagButton>{tag}</TagButton>
          </li>
        );
      })}
    </ul>
  );
};

export default WorkTags;
