import React from 'react';
import SocialList from './social-list';

const Contact = () => {
  return (
    <>
      <div className='pt-6 pb-4 sm:pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8'>
          Contact
        </h1>
        <p className='max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6'>
          Feel free to reach out to me through whatever medium you find is
          easiest. I'm happy to answer questions, collaborate, or chat if I have
          the time.
        </p>
      </div>
      <SocialList />
    </>
  );
};

export default Contact;
