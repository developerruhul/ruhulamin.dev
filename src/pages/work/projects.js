import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "../../components/project-card";

const Projects = () => {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          title
          scope
          description
          tags
          url
          img {
            childImageSharp {
              gatsbyImageData(
                width: 440
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  return (
    <section className="mt-28 grid grid-cols-1 justify-items-center items-start lg:justify-items-start gap-y-10 md:gap-y-14 md:gap-x-10 md:grid-cols-2 lg:grid-cols-3">
      {nodes.map(project => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </section>
  );
};

export default Projects;
