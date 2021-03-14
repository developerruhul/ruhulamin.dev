import React from 'react';
import ProjectCard from '../../components/project-card';
import projects from '../../data/projects';

const Projects = () => {
  return (
    <section className='mt-28 grid grid-cols-1 justify-items-center lg:justify-items-start gap-y-10 md:gap-y-14 md:gap-x-14 md:grid-cols-2 lg:grid-cols-3'>
      {projects.list.map((id) => (
        <ProjectCard key={id} data={projects.data[id]} />
      ))}
    </section>
  );
};

export default Projects;
