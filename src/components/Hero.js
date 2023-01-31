import React from 'react';
import './Hero.css';
import image from '../images/restauranfood.jpg';

function Hero() {
  return (
    <section className="hero">
        <div className='content'>
            <div className='promo'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranen restaurant, focused on traditional receipes served with a modern twist</p>
                <input type='button' value='Reseve a Table' />
            </div>
            <div className='image' />
        </div>
    </section>
  );
}

export default Hero;
