import React, { useEffect, useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage'
import { updateTimes, initializeTimes } from '../reducers/AvailableTimesReducer';
import './Main.css';

function Main() {

  const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem('bookings') || '[]'));
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = ( formData ) => {
    if (submitAPI(formData)) {
      bookings.push({ id: (new Date()).getTime(), ...formData });
      localStorage.setItem('bookings', JSON.stringify(bookings));
      navigate('/confirmed-booking');
    }
  }

  const cancelBooking = ( booking ) => {
    const updatedBookings = bookings.filter(b => booking.id !== b.id);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  }

  useEffect(() => {
    initializeTimes();
  }, [])

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} onSelectDate={dispatch}  onSubmitForm={submitForm} bookings={bookings} cancelBooking={cancelBooking} />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking bookings={bookings} />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;

// the below functions are copied from https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
const submitAPI = function(formData) {
  return true;
};