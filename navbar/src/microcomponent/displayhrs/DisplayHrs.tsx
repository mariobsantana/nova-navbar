import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './displayhrs.css'
import {FC} from "react";
import {Hours} from "../../data/hours";
export interface HoursProps{
hours: Hours[]
}

export const BasicPopover:FC<HoursProps> = ({hours}) => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const totalHours = hours.reduce((accumulator, obj) => {
return accumulator + obj.hrs;
  }, 0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return ( 
    <div>
      <Button  aria-describedby={id} variant="contained" onClick={handleClick} >
       {totalHours}
      </Button>
      <Popover
        id={id}
        color="white"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
         {hours.map((option, index)=>(
  <Typography sx={{ p: 2 }} key={index}>
         {option.name} {option.hrs} hrs
  </Typography>
      ))}
        
      </Popover>
    </div>
  );
}