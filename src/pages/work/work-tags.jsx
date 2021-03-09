import React from 'react';
import data from '../../data/projects.js';

const WorkTags = ({className}) => {
  return (
    <ul className='max-w-2xl my-6 space-y-6'>
      {data.tags.map((tag) => {
        return (
          <li className="inline-block mr-2" title={`Filter by ${tag}`}>
            <button className="bg-gray-100 rounded py-1 px-2 font-semibold text-sm text-gray-700 focus-within:ring focus-within:outline-none transition-all duration-75 border border-gray-300 shadow hover:shadow-none">{tag}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default WorkTags;
