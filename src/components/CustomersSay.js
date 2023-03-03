import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    rating: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/3048/3048127.png',
    name: 'Jake',
    quote: 'The greek salad was great!'
  },
  {
    rating: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png',
    name: 'Jane',
    quote: 'The bruchetta was very tasty!'
  },
  {
    rating: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/921/921071.png',
    name: 'Bob',
    quote: 'I loved the Lemon Dessert!'
  },
];

function Testimonial({image, rating, name, quote}) {
  return (
    <article className='testimonial'>
      <h2>{quote}</h2>
      <h3 className='rating'>{[...Array(rating).keys()].map(e => (<img src='https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' key={e} alt={e} />))}</h3>
      <img src={image} alt={name}></img>
      <p>{name}</p>
    </article>);
}

function CustomersSay() {
  return (
    <section className="content testimonials">
        <h1>Testimonials</h1>
        <div className='list'>
          {testimonials.map(t => <Testimonial {...t} key={t.quote} />)}
        </div>
    </section>
  );
}

export default CustomersSay;
