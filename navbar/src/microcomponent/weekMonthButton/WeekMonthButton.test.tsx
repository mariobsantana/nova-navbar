import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeekMonthButtons } from './WeekMonthButton';

test('Render month button test', () => {
  render(<WeekMonthButtons></WeekMonthButtons>);
    const buttonComponent = screen.getByText(/Month/i);
    expect(buttonComponent).toBeInTheDocument();
});

test('Render week button test', () => {
    render(<WeekMonthButtons></WeekMonthButtons>);
    const buttonComponent = screen.getByText(/Week/i);
    expect(buttonComponent).toBeInTheDocument();
});