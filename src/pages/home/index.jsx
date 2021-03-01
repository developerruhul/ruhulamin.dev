import React from 'react';
import Header from '../../components/header';
import Hero from '../../components/hero';

const Home = () => {
  return (
    <>
      <Header />
      <main className='main container'>
        <Hero />
      </main>
    </>
  );
};

export default Home;
