import React from 'react';
import Footer from './components/footer';
import Header from './components/header';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='main container flex-auto flex-grow flex-shrink-0 mt-28 mb-16 md:mt-44 '>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
