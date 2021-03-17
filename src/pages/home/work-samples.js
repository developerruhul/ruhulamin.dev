import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ProjectCard from "../../components/project-card";

const WorkSamples = () => {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(graphql`
    query {
      allProjectsJson(limit: 3) {
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
    <section className="mb-20 sm:mb-10 container section-margin-top">
      <article className="text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
          Work samples
        </h3>
        <div className="font-medium sm:font-semibold">
          <Link className="underline-effect" to="/work">
            Go to work page
          </Link>{" "}
          to see more of my work.
        </div>
      </article>

      <section className="mt-16 sm:mt-24 grid grid-cols-1 items-start justify-items-center gap-y-14 md:gap-x-14 md:grid-cols-2 lg:grid-cols-3">
        {nodes.map(project => {
          return <ProjectCard key={project.id} data={project} />;
        })}
      </section>
    </section>
  );
};

export default WorkSamples;
