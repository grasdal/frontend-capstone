import React from 'react';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

function BookingPage({onSelectDate, availableTimes, onSubmitForm}) {
  return (
    <section className="content">
      <h1>Book Now</h1>
      <BookingForm availableTimes={availableTimes} onSelectDate={onSelectDate} onSubmitForm={onSubmitForm} />
    </section>
  );
}

export default BookingPage;
