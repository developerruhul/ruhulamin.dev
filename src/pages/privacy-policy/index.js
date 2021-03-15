import React from 'react';

const PrivacyPolicy = () => {
  return (
    <article className='prose prose-lg container prose-purple pt-16 section-margin-top'>
      <header className='text-center mb-20 md:mb-32'>
        <h1>Privacy Policy</h1>
        <p>How I handle your data</p>
      </header>

      <p>
        This website does not collect any personal data. It does not set any
        cookies and it does not use any third-party tracking scripts. No user
        analytics or other metrics are processed during your visit, and the
        server does not write any log files, which means your IP address is not
        stored anywhere.
      </p>
      <p>Basically, it’s just a free piece of content, no strings attached.</p>

      <h2>Secure Data Transfer</h2>
      <p>
        This website transmits itself using HTTPS, encrypting all data between
        the browser and the server. Your network provider may still be able to
        see that you are loading files from this site, but not their content.
        This also protects you from third parties intercepting data e.g. while
        browsing on public WiFi, or network providers injecting ads into this
        site.
      </p>

      <h2>Responsible Data Controller</h2>
      <p>
        <strong>Ruhul Amin</strong>
        <br />
        Belkuchi 6740
        <br />
        Sirajganj, Rajshahi
        <br />
        Bangladesh
      </p>

      <p>
        If you have any questions or concerns about this,
        <br />
        please contact me at <a href='mailto:ruhulamin.webdev@gmail.com'>ruhulamin.webdev@gmail.com</a>
      </p>
    </article>
  );
};

export default PrivacyPolicy;
