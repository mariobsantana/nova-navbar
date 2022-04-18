import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import './WeekMonthButton.css';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.1),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CustomizedDividers() {
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
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
        
      >
        <StyledToggleButtonGroup
          size="small"
          value={value}
          exclusive
          onChange={handleValue}
          className="wmbutton2"
        >
          <ToggleButton value="week">
            <Typography className="wmbutton" variant='button'> Week</Typography>
          </ToggleButton>
          <ToggleButton value="month">
            <Typography className="wmbutton" variant='button'> Month</Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}