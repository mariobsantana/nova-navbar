import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './WeekMonthButton.css';

export default function WeekMonthButton() {
  const [value, setValue] = React.useState('week');

  const handleValue = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => {
    if (newValue === 'week') {
      setValue(newValue);
      console.log("Change to week mode");
    } else if(newValue === 'month') {
      setValue(newValue);
      console.log("Change to month mode");
    }
  };

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleValue}
        size="small"
      >
        <ToggleButton id="MonthButton" value="month">
          Month
        </ToggleButton>
        <ToggleButton value="week">
          Week
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}