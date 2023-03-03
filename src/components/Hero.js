import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
        <div className='content'>
            <div className='promo'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranen restaurant, focused on traditional receipes served with a modern twist</p>
                <Link to={'/booking'} className='button'>Reserve a Table</Link>
            </div>
            <div className='image' />
        </div>
    </section>
  );
}

export default Hero;
