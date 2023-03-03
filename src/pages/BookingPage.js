import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingTable from '../components/BookingTable';
import './BookingPage.css';

function BookingPage({onSelectDate, availableTimes, onSubmitForm, bookings, cancelBooking}) {

  return (
    <section className="content booking-page">
      <div>
        {bookings && bookings.length > 0 ? <BookingTable bookings={bookings} cancelBooking={cancelBooking} /> : ''}
        <h1>Book Now</h1>
        <BookingForm availableTimes={availableTimes} onSelectDate={onSelectDate} onSubmitForm={onSubmitForm} />
      </div>
      <div className='image' />
    </section>
  );
}

export default BookingPage;
