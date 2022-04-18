
import { render, screen, fireEvent } from '@testing-library/react';
import BasicPopover from './DisplayHrs';

test('Render My Counter', () => {
  render(<BasicPopover />);

  expect(screen.getByText(90)).toBeInTheDocument();
});