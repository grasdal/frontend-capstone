import React from 'react';
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import './BookingForm.css';

function BookingForm({availableTimes, onSelectDate, onSubmitForm}) {

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().slice(0, 10),
      time: availableTimes[0],
      guests: 1,
      occasion: ''
    },
    validationSchema: Yup.object({
      date:  Yup.date().required('Selecting a date is required!').min(today),
      time: Yup.string().required('Selecting a time is required!'),
      guests: Yup.number().min(1).max(10).required('Selecting a number of guests is required!'),
      occation: Yup.string().oneOf(['Birthday', 'Anniversary']),
    }),
    onSubmit: (values) => {
      onSubmitForm(values);
    },
  });

  return (
    <Formik >
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" required {...formik.getFieldProps('date')} onBlur={e => onSelectDate(new Date(e.target.value))} min={new Date().toISOString().slice(0, 10)}/>
        {formik.touched.date && formik.errors.date ? (<b>{formik.errors.date}</b>) : null}

        <label htmlFor="time">Choose time</label>
        <select id="time" required {...formik.getFieldProps('time')}>
            {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {formik.touched.time && formik.errors.time ? (<b>{formik.errors.time}</b>) : null}

        <label htmlFor="guests">Number of guests</label>
        <input type="number" required placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps('guests')}/>
        {formik.touched.guests && formik.errors.guests ? (<b>{formik.errors.guests}</b>) : null}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...formik.getFieldProps('occation')}>
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (<b>{formik.errors.occasion}</b>) : null}

        <input type="submit" value="Make Your reservation" className='button' />
      </form>
    </Formik>
  );
}

export default BookingForm;