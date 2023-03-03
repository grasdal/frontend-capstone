import React from 'react';
import { Link } from 'react-router-dom';
import './Specials.css';
import greeksalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.jpg'
import lemmondesert from '../images/lemon dessert.jpg'

const specials = [
  {
    image: greeksalad,
    title: 'Greek salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and roemary croutons.'
  },
  {
    image: bruchetta,
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
  },
  {
    image: lemmondesert,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from granma\'s receipe BookingForm, every last ingredient has been sourced and is as authentic as can be imagined.'
  }
];


function Special({image, title, price, description}) {
  return (
  <article className='special'>
    <img src={image} alt={title}></img>
    <header>
      <h2>{title}</h2>
      <p className='price'>{price}</p>
    </header>
    <p>{description}</p>
    <footer>
      <Link to={'/order'}>Order a delivery</Link>
    </footer>
  </article>);
};

function Specials() {
  return (
    <section className="content specials">
      <header>
        <h1>This week's specials!</h1>
        <Link to={'/menu'} className='button'>Online Menu</Link>
      </header>
      <div className='list'>
        {specials.map(s => <Special {...s} key={s.title} />)}
      </div>
    </section>
  );
}

export default Specials;
