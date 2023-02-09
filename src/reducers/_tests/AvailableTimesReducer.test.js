import React from 'react';
import {updateTimes, initializeTimes} from '../AvailableTimesReducer';

describe('updateTimes reducer', () => {
    it('returns state unchanged if no date passed in', () => {
        const state = ['17:00', '18:00', '19:00'];
        const newState = updateTimes(state);
        expect(newState).toEqual(state);
    });

    it('updates the state based on the date passed in', () => {
        const state = ['17:00', '18:00', '19:00'];
        const date = new Date('2023-02-09');
        const newState = updateTimes(state, date);
        expect(newState).toEqual(["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:30", "21:30", "22:00", "22:30", "23:00",]);
    });
});

describe('initializeTimes', () => {
    it('returns the initial times for the available times', () => {
        expect(initializeTimes().length > 0).toBe(true);
    });
});
