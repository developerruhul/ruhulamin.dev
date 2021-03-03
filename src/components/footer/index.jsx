import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../brand';

const Footer = () => {
  return (
    <footer className='footer justify-self-start bg-gray-50 pb-12 pt-16 sm:pt-20 mt-8 sm:mt-10'>
      <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 container'>
        <section className='text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
          <article className='space-y-5'>
            <h4 className='text-xs font-semibold tracking-wide text-gray-900 uppercase'>
              SOCIAL
            </h4>
            <ul className='space-y-4'>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <a target='_blank' href='https://twitter.com/developerruhul'>
                  Twitter
                </a>
              </li>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <a target='_blank' href='https://github.com/developerruhul'>
                  Github
                </a>
              </li>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/developerruhul/'
                >
                  LinkedIn
                </a>
              </li>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <a target='_blank' href='https://facebook.com/developerruhul/'>
                  Facebook
                </a>
              </li>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <a target='_blank' href='https://blog.ruhulamin.dev'>
                  Blog
                </a>
              </li>
            </ul>
          </article>

          <article className='space-y-5'>
            <h4 className='text-xs font-semibold tracking-wide text-gray-900 uppercase'>
              Legal
            </h4>
            <ul className='space-y-4'>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <Link className='block' to='/privacy-policy'>
                  Privacy Policy
                </Link>
              </li>
              <li className='hover:text-gray-900 transition-colors duration-200 tracking-tight font-medium'>
                <Link to='/'>
                  © 2021, <a href='https://www.ruhulamin.dev'>Ruhul Amin</a>
                </Link>
              </li>
            </ul>
          </article>
        </section>

        <Brand className='pt-10' />
      </div>
    </footer>
  );
};

export default Footer;
