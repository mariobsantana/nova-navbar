import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('week');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment === 'week') {
      setAlignment(newAlignment);
    } else if(newAlignment === 'month') {
      setAlignment(newAlignment);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        size="small"
      >
        <ToggleButton value="month">
          Month
        </ToggleButton>
        <ToggleButton value="week">
          Week
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}