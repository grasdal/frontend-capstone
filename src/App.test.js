import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon headline', () => {
  render(<App />);
  const header = screen.getByText(/Little Lemon/i);
  expect(header).toBeInTheDocument();
});

test('renders intro headline', () => {
  render(<App />);
  const intro = screen.getByText(/We are a family owned Mediterranen restaurant, focused on traditional receipes served with a modern twist/i);
  expect(intro).toBeInTheDocument();
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
