import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon headline', () => {
  render(<App />);
  const header = screen.getByText(/Little Lemon/i);
  expect(header).toBeInTheDocument();
});

test('renders Chicago headline', () => {
  render(<App />);
  const chicago = screen.getByText(/Chicago/i);
   expect(chicago).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<App />);
  const navigation = screen.getByRole('navigation')
   expect(navigation).toBeInTheDocument();
});

test('renders Copyright in footer', () => {
  render(<App />);
  const footer = screen.getByText('Copyright')
   expect(footer).toBeInTheDocument();
});
