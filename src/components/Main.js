import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';
import HomePage from '../pages/HomePage';

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
