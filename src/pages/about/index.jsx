import React from 'react';
import { Link } from 'react-router-dom';
import DevPhoto from '../../images/ruhul/profile.jpg';
import './style.css';

const About = () => {
  return (
    <>
      <img
        className='about__devphoto mx-auto mt-8 max-w-sm w-full shadow-2xl'
        width={400}
        src={DevPhoto}
        alt='Developer Ruhul'
      />
      <article className='mb-10 mt-16 prose prose-lg prose-purple'>
        <h1 className='text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight'>
          About me
        </h1>
        <p className='max-w-4xl text-lg font-medium text-gray-600 sm:leading-9'>
          I'm a UI engineer. I Design and Develop websites- usually, I do both
          at the same time. This allows me to quickly prototype ideas, go
          straight from wireframe to website and create responsive variants on
          the fly.
        </p>
        <h2 className='text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight'>
          Get in touch
        </h2>
        <p className='max-w-4xl text-lg font-medium text-gray-600 sm:leading-9'>
          The easiest way is to send an e-mail with your project details to{' '}
          <a href='mailto:ruhulamin.webdev@gmail.com'>
            ruhulamin.webdev@gmail.com
          </a>
          . I'll usually respond within 48 hours. Otherwise{' '}
          <Link to='/contact'>here's</Link> all my social media links.
        </p>
        <h2 className='text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight'>
          What you can expect
        </h2>
        <p className='max-w-4xl text-lg font-medium text-gray-600 sm:leading-9'>
          I am fast and meticulously. You can always expect
        </p>
        <ul>
          <li>
            <strong>Mobile-first</strong> -{' '}
            <em>
              ~70% of traffic comes from mobile devices. Great mobile Ux and
              fast loading speeds will have a positive impact on conversion
              rates.
            </em>
          </li>
          <li>
            <strong>Clean code</strong> -{' '}
            <em>
              Meticulously commented code, well-named variables and small
              components will allow your team to extend my work easily.
            </em>
          </li>
          <li>
            <strong>Anti-bug guarantee</strong> -{' '}
            <em>
              Bugs happen. If they happen within one year after my contract
              ends, I'll fix them for free.
            </em>
          </li>
          <li>
            <strong>Great SEO</strong> - _Rich search results, SMO, good
            semantics, small bundles &amp; all the other technical foundations
            for SEO.
          </li>
        </ul>
        <h2 className='text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight'>
          What I don't do
        </h2>
        <ul>
          <li>
            <strong>Backend work</strong> -{' '}
            <em>
              I can set up a backend as part of a larger project but I prefer
              sticking to frontend and design
            </em>
          </li>
          <li>
            <strong>IE support</strong> -{' '}
            <em>
              IE is shrinking quickly and will be dead by 2021. The work that
              goes into making your site work well on a 7-year-old browser is
              usually not worth the effort.
            </em>
          </li>
          <li>
            <strong>Legacy Tech</strong> -{' '}
            <em>
              Angular, jQuery, Magento, etc. - If your website is exclusively
              built on either of those you're better off working with someone
              else
            </em>
          </li>
        </ul>
        <h2 className='text-xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight'>
          Tech stack
        </h2>
        <p className='max-w-4xl text-lg font-medium text-gray-600 sm:leading-9'>
          I work in <strong>Javascript</strong> or <strong>Typescript</strong>{' '}
          and usually use <strong>React</strong> with <strong>Next.js</strong>{' '}
          for websites. For more ambitious projects or when performance is
          crucial I use <strong>Svelte</strong>. I can quickly integrate with
          any tech stack and have experience using all major state management
          and styling paradigms.
        </p>
      </article>
    </>
  );
};

export default About;
