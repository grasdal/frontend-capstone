import { render, screen } from "@testing-library/react";
import BookingPage from '../BookingPage';

test('Renders the BookingPage', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const onSelectDate = jest.fn();

    render(<BookingPage availableTimes={availableTimes} onSelectDate={onSelectDate} />);
    expect(screen.getByText('Book Now')).toBeInTheDocument();
})