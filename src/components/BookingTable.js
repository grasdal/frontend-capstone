import React from 'react';
import './BookingTable.css';

function BookingTable({bookings, cancelBooking}) {

  return (
    <section className='reservations'>
      <h1>Your existing reservations</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map(b => { return (
            <tr key={b.id}>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.guests}</td>
              <td>{b.occation}</td>
              <td><button onClick={() => cancelBooking(b)} className='button-secondary'>Cancel reservation</button></td>
            </tr>
          )})}
        </tbody>
      </table>
    </section>
  );
}

export default BookingTable;