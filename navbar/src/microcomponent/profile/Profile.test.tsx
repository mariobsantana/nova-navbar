import { render, screen, fireEvent } from '@testing-library/react';
import ImageAvatars from './Profile';

test('Render', () => {
  render(<ImageAvatars />);
  expect(screen.getByText("DL")).toBeInTheDocument();
  
});