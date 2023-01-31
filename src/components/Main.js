import React from 'react';
import Hero from './Hero';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Hero />
      <section className="content">
        <h1>This week's specials!</h1>
      </section>
    </main>
  );
}

export default Main;
