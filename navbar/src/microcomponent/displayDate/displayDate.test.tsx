
import { render, screen } from '@testing-library/react';
import DisplayDate from './displayDate'

test("Should render text correctly", () => {
    render(<DisplayDate />);
    const displayComponent = screen.getByTestId("displayDate");
    expect(displayComponent).toBeInTheDocument();
});