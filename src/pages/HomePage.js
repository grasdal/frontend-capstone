import React from 'react';
import CustomersSay from '../components/CustomersSay';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <CustomersSay />
    </>
  );
}

export default HomePage;
