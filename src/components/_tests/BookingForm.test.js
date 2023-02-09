import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from '../BookingForm';

test('BookingForm renders correctly', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const onSelectDate = jest.fn();

    render(<BookingForm availableTimes={availableTimes} onSelectDate={onSelectDate} />);

    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time").value).toEqual(availableTimes[0]);
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
})

it('BookingForm can be submitted', async () => {
    const onSubmit = jest.fn();
    const onSelectDate = jest.fn();
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    render(<BookingForm availableTimes={availableTimes} onSelectDate={onSelectDate} onSubmitForm={onSubmit} />);

    fireEvent.click(screen.getByText('Make Your reservation'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
});
