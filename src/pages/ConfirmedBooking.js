import React from 'react';
import { Link } from 'react-router-dom';
import marioandadrian from '../images/Mario and Adrian b.jpg'
import './ConfirmedBooking.css';

function ConfirmedBooking({ bookings }) {
  if(bookings.length === 0) {
    return <></>
  }
  const {guests, date, time, occation} = bookings[bookings.length - 1];
  let greeting;
  switch(occation) {
      case 'Anniversary':
        greeting = 'We hope to make your anniversary dinner special!';
        break;
        case 'Birthday':
          greeting = 'We hope to make your birthday dinner special!'
          break;
    default:
      greeting = 'We look forward to serving you!';
  }
  return (
    <section className="content">
      <h1>Booking confirmed</h1>
      <p>Your booking has been confirmed for <b>{guests} {guests > 1 ? 'guestss' : 'guest'}</b> on <b>{date}</b> at <b>{time}</b>.</p>
      <p>You can manage your reserveations from the <Link to={'/booking'}>Reservations page</Link>.</p>
      <h2>{greeting}</h2>
      <img src={marioandadrian} alt='Mario and Adrian' />
    </section>
  );
}

export default ConfirmedBooking;
