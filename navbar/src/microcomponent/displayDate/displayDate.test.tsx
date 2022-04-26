
import { render, screen } from '@testing-library/react';
import { DisplayDate } from './displayDate'
import { dates } from "../../data/dates"

const props={
    startDate: dates.startDate,
    endDate: dates.endDate,
}
test("Should render text correctly", () => {
    
    render(<DisplayDate  dates={props} data-testid="displayDate" />);
    const displayComponent = screen.getByTestId("displayDate");
    expect(displayComponent).toBeInTheDocument();
});