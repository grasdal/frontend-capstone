import React, { useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import HomePage from '../pages/HomePage';
import { updateTimes, initializeTimes } from '../reducers/AvailableTimesReducer';
import './Main.css';

function Main() {

  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = ( formData ) => {
    if (submitAPI(formData)) {
      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      bookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      navigate('/confirmed-booking');
    }
  }

  useEffect(() => {
    initializeTimes();
  }, [])

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} onSelectDate={updateTimes}  onSubmitForm={submitForm} />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;

// the below functions are copied from https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
const submitAPI = function(formData) {
  return true;
};