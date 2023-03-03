import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from '../BookingForm';

const onSubmit = jest.fn();
const onSelectDate = jest.fn();
const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
let submitButton;

beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} onSelectDate={onSelectDate} onSubmitForm={onSubmit} />);
    submitButton = screen.getByText('Make Your reservation');
});

test('BookingForm renders correctly', () => {
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time").value).toEqual(availableTimes[0]);
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
})

it('BookingForm can be submitted', async () => {
    await act( async () => {
        fireEvent.click(submitButton);
    });
    expect(onSubmit).toHaveBeenCalled();
});

describe('form is being validates', () => {
    it('date is validated', async () => {
        const input = screen.getByLabelText('Choose date');
        await act( async () => {
            fireEvent.change(input, {target: {value: ''}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).not.toHaveBeenCalled();
        await act( async () => {
            fireEvent.change(input, {target: {value: '2020-01-01'}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).not.toHaveBeenCalled();
        await act( async () => {
            fireEvent.change(input, {target: {value: '2025-05-24'}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
    it('Number of guests is validated', async () => {
        const input = screen.getByLabelText('Number of guests');
        await act( async () => {
            fireEvent.change(input, {target: {value: ''}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).not.toHaveBeenCalled();
        await act( async () => {
            fireEvent.change(input, {target: {value: 11}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).not.toHaveBeenCalled();
        await act( async () => {
            fireEvent.change(input, {target: {value: 0}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).not.toHaveBeenCalled();
        await act( async () => {
            fireEvent.change(input, {target: {value: 1}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).toHaveBeenCalledTimes(1);
        await act( async () => {
            fireEvent.change(input, {target: {value: 10}})
            fireEvent.click(submitButton);
        });
        expect(onSubmit).toHaveBeenCalledTimes(2);
    });
})