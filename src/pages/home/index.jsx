import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='main container flex-auto flex-grow flex-shrink-0 '>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
