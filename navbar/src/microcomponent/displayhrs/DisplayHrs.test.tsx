
import { render, screen} from '@testing-library/react';
import {BasicPopover} from './DisplayHrs';
import {hrsT} from '../../data/hours';

test('Render My Counter', () => {
  render(<BasicPopover hours={hrsT} />);

  
});