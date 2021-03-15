import React from 'react';
import SocialList from './social-list';

const Contact = () => {
  return (
    <div className="container section-margin-top">
      <div className='pt-6 pb-4 sm:pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-7'>
          Contact
        </h1>
        <p className='max-w-4xl text-lg sm:text-xl font-medium sm:leading-9 space-y-5 mb-5'>
          Feel free to reach out to me through whatever medium you find is
          easiest. I'm happy to answer questions, collaborate, or chat.
          <br />
          <br />
          But if you want to <b>work with me</b> then the easiest way is to send an
          e-mail with your project details to{' '}
          <a className="underline-effect" href='mailto:ruhulamin.webdev@gmail.com'>
            ruhulamin.webdev@gmail.com
          </a>
          . I'll usually respond within <b>48 hours</b>.
        </p>
      </div>
      <SocialList />
    </div>
  );
};

export default Contact;
