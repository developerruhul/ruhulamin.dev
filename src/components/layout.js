import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='main flex-auto flex-grow flex-shrink-0 mb-16'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
