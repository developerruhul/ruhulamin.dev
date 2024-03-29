import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import cls from "classnames";
import * as styles from "./about.module.css";

const About = () => {
  return (
    <div className="container section-margin-top">
      <div className="flex justify-center">
        <StaticImage
          placeholder="blurred"
          className={cls("shadow-md", styles.devphoto)}
          width={400}
          src="../../images/developer-ruhul.jpg"
          alt="Developer Ruhul"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <article className="mb-10 mt-16 prose prose-lg prose-purple">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight">
          About me
        </h1>
        <div className="max-w-4xl text-lg font-medium text-gray-600 sm:leading-9">
          <p>
            I'm a full stack web developer with 4 years of experience. I create
            outstanding websites and webapps with beautiful and smooth user
            interfaces but also I'm able to develop the backend and then
            integrate the two(website and API) to create a full blown web
            application - usually, I do both at the same time. This allows me to
            build almost any kind of web app or application very quickly.
          </p>
        </div>

        <h2 className="text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight">
          Get in touch
        </h2>
        <p className="max-w-4xl text-lg font-medium text-gray-600 sm:leading-9">
          The easiest way is to send an e-mail with your project details to{" "}
          <a href="mailto:ruhulamin.webdev@gmail.com">
            ruhulamin.webdev@gmail.com
          </a>
          . I'll usually respond <b>within 48 hours</b>. Otherwise{" "}
          <Link to="/contact">here's</Link> all my social media links.
        </p>

        <h2 className="text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight">
          Tech stack
        </h2>
        <p className="max-w-4xl text-lg font-medium text-gray-600 sm:leading-9">
          I work in <b>Javascript</b> and usually use <b>ReactJS</b> to create
          websites. My skills include -
        </p>

        <ul>
          <li>
            <strong>Frontend</strong> -{" "}
            <em>
              HTML, CSS, Javascript, React.js, Redux, Next.js, Gatsby,
              TailwindCSS, Bootstrap and other typical frontend techs.
            </em>
          </li>
          <li>
            <strong>Backend</strong> -{" "}
            <em>Node.js, Next.js, Express, Graphql, Prisma, MongoDB, MySQL.</em>
          </li>
        </ul>
        <p>
          I always keep myself up to date with the everchanging tech industry. I
          can quickly integrate with any tech stack and have experience using
          all major state management and styling paradigms.
        </p>

        <h2 className="text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight">
          What you can expect
        </h2>
        <p className="max-w-4xl text-lg font-medium text-gray-600 sm:leading-9">
          I am fast and meticulous. You can always expect
        </p>
        <ul>
          <li>
            <strong>Responsive website</strong> -{" "}
            <em>
              ~70% of traffic comes from mobile devices. Great mobile UX and
              fast loading speeds will have a positive impact on conversion
              rates. I build websites that are responsive and provide great user
              experience in almost all kinds of devices with various screen
              sizes.
            </em>
          </li>
          <li>
            <strong>Maintainable code</strong> -{" "}
            <em>
              Meticulously commented code, well-named variables and small
              components will allow your team to extend my work easily while
              also making the codebase maintainable in the long run.
            </em>
          </li>
          <li>
            <strong>Anti-bug guarantee</strong> -{" "}
            <em>
              Bugs happen. If they happen within 2 months after my contract
              ends, I'll fix them for free.
            </em>
          </li>
        </ul>
        <h2 className="text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight">
          What I don't do
        </h2>
        <ul>
          <li>
            <strong>Graphic design</strong> -{" "}
            <em>
              I have a good sense of design and can convert any design into
              beautiful website but I prefer sticking with coding.
            </em>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default About;
