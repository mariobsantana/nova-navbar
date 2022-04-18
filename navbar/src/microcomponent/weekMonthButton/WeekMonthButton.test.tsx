import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Render month button test', () => {
  render(<App />);
  const MonthButton = screen.getByText(/Month/i);
  expect(MonthButton).toBeInTheDocument();
});

test('Render week button test', () => {
  render(<App />);
  const WeekButton = screen.getByText(/Week/i);
  expect(WeekButton).toBeInTheDocument();
});