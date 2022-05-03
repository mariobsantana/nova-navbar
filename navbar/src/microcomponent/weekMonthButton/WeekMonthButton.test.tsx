import { render, screen, fireEvent } from '@testing-library/react';
import { WeekMonthButtons, WeekMonthButton } from './WeekMonthButton';

test('Render week/month button test', () => {
    render(<WeekMonthButtons />);
    const buttonComponent = screen.getByTestId("WMButton");
    expect(buttonComponent).toBeInTheDocument();
});

describe("Functionality week tests", () => {
    test("Should call onClick function", () => {
      render(<WeekMonthButtons onClickW={() => {
        console.log("Week was clicked!");
      }}/>);
      
      console.log = jest.fn();

      const buttonComponent = screen.getByText(/Week/);
      fireEvent.click(buttonComponent);

      const consoleSpy = jest.spyOn(console, 'log');
      expect(consoleSpy).toHaveBeenCalledWith("Week was clicked!");
    });
  });

  describe("Functionality month tests", () => {
    test("Should call onClick function", () => {
      render(<WeekMonthButtons onClickM={() => {
        console.log("Month was clicked!");
      }}/>);
      
      console.log = jest.fn();

      const buttonComponent = screen.getByText(/Month/);
      fireEvent.click(buttonComponent);

      const consoleSpy = jest.spyOn(console, 'log');
      expect(consoleSpy).toHaveBeenCalledWith("Month was clicked!");
    });
  });