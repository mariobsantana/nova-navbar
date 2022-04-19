import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import WeekMonthButton from './WeekMonthButton';

test('Render month button test', () => {
  render(<WeekMonthButton></WeekMonthButton>);
    const buttonComponent = screen.getByText(/Month/i);
    expect(buttonComponent).toBeInTheDocument();
});

test('Render week button test', () => {
    render(<WeekMonthButton></WeekMonthButton>);
    const buttonComponent = screen.getByText(/Week/i);
    expect(buttonComponent).toBeInTheDocument();
});