import React from 'react';
import {
  FaTwitter,
  FaLinkedin,
  FaDribbble,
  FaGithub,
  FaFacebook,
  FaSkype,
  FaEnvelope,
} from 'react-icons/fa';

const SocialList = () => {
  return (
    <div className='py-3 sm:py-5 md:pt-6 md:pb-12 max-w-3xl'>
      <ul
        className='grid gap-8'
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white bg-[#00AFF0] hover:text-gray-100'
            href='https://join.skype.com/invite/ph5CQgIdcQC5'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-lightBlue-100 text-[#00AFF0] rounded-full p-3'>
                <FaSkype />
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>
                  Skype{' '}
                  <span className='text-gray-50 text-xs'>(ruhulamin3482)</span>
                </h2>
                Chat with me →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-100 hover:border-gray-300 block text-white hover:text-gray-100 bg-[#1DA1F2]'
            href='https://twitter.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-white text-[#1DA1F2] rounded-full p-3'>
                <FaTwitter />
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl'>Twitter</h2>
                Tweet @ me →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-purple-400'
            href='mailto:ruhulamin.webdev@gmail.com'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-purple-100 text-purple-500 rounded-full p-3'>
                <FaEnvelope />
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>Email</h2>
                Send me an email →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-gray-500'
            href='https://github.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-gray-100 text-gray-500 rounded-full p-3'>
                <FaGithub />
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>GitHub</h2>
                Profile on GitHub →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-pink-400'
            href='https://dribbble.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-pink-100 text-pink-500 rounded-full p-3'>
                <FaDribbble />
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>Dribbble</h2>
                Profile on Dribbble →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl bg-[#0A66C2] border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 '
            href='https://www.linkedin.com/in/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-blue-100 text-[#0A66C2] rounded-full p-3'>
                <FaLinkedin />
              </div>
              <div className='flex flex-col justify-center  font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>LinkedIn</h2>
                Connect with me →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl bg-[#0676E8] border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 '
            href='https://www.facebook.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div className='text-3xl bg-blue-100 text-[#0676E8] rounded-full p-3'>
                <FaFacebook />
              </div>
              <div className='flex flex-col justify-center  font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>Facebook</h2>
                Connect with me →
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
