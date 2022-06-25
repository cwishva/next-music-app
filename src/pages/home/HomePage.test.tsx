import { render, screen } from '@testing-library/react';
import HomePage from '@pages/home/HomePage';
import { MemoryRouter } from 'react-router-dom';

test('renders search text input', () => {
  render(<HomePage />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText(/Search term/i);
  expect(linkElement).toBeInTheDocument();
});
