import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({availableTimes, onSelectDate, onSubmitForm}) {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitForm({ date, time, guests, occasion});
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={e => { onSelectDate(new Date(e.target.value)); setDate(e.target.value); }} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
          {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;