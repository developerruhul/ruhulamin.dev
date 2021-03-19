import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import cls from "classnames";

import Tag from "../tag";
import LineClamp from "../line-clamp";
import * as styles from "./project-card.module.css";

const ProjectCard = ({ className = "", data }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <article
      onMouseOver={() => setHovering(true)}
      onFocus={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onBlur={() => setHovering(false)}
      className={cls("rounded-3xl max-w-md border", className)}
    >
      <Link target="_blank"  rel="noreferrer" title="Go to live website" to={data.url}>
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={7}
          perspective={800}
          transitionSpeed={1500}
          tiltReverse
          className={cls(styles.imgWrapper, "rounded-t-md p-5 relative")}
        >
          <div
            style={{
              transform: hovering ? "translateZ(10px)" : "translateZ(0)",
            }}
            className={cls(
              "w-1/4 sm:w-2/4 absolute z-0 -right-2 sm:right-6 -top-4 transition-all duration-500 ease-out",
              { "sm:-right-2 -top-8": hovering }
            )}
          >
            <div className={cls(styles.imgBubble, "rounded-full")} />
          </div>
          <div
            style={{
              transform: hovering ? "translateZ(10px)" : "translateZ(0)",
            }}
            className="w-2/12 absolute z-0 -left-2 bottom-16 transition-transform duration-500 ease-out"
          >
            <div className={cls(styles.imgBubble, "rounded-full")} />
          </div>
          <div
            style={{
              transform: hovering ? "translateZ(20px)" : "translateZ(0)",
            }}
            className="w-5 absolute z-0 -left-6 bottom-11 transition-transform duration-500 ease-out"
          >
            <div className={cls(styles.imgBubble, "rounded-full")} />
          </div>

          <GatsbyImage
            alt={data.description}
            className="rounded-lg hover:shadow-2xl z-20 transition-all duration-500 ease-out"
            style={{
              transform: hovering ? "translateZ(20px)" : "translateZ(0)",
            }}
            image={getImage(data.img)}
          />
        </Tilt>
      </Link>

      <section className="p-6">
        <h3 className="font-bold text-sm tracking-tight text-purple-800">
          {data.scope}
        </h3>
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mt-1 capitalize">
          {data.title}
        </h2>

        <LineClamp
          className="mt-3"
          text={data.description}
          component={
            <section className="my-6">
              {data.tags.map((tag, i) => (
                <Tag key={tag + i} className="mr-2 mt-2">
                  {tag}
                </Tag>
              ))}
            </section>
          }
        />

        <footer className="mt-8">
          <section className="flex items-center space-x-2 ">
            <a
              target="_blank"  rel="noreferrer"
              href={data.github}
              className="hover:text-purple-400 py-1.5 px-3 bg-purple-50 rounded-md transition-colors font-bold text-purple-500 text-[13px]"
            >
              Source code
            </a>
            <a
              target="_blank"  rel="noreferrer"
              href={data.url}
              className="hover:text-purple-400 py-1.5 px-3 bg-purple-50 rounded-md transition-colors font-bold text-purple-500 text-[13px]"
            >
              Live link
            </a>
          </section>
        </footer>
      </section>
    </article>
  );
};

export default ProjectCard;
