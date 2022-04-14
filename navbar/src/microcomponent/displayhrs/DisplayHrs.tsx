import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './displayhrs.css'

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  
  //Arrow Function to Test Hrs
  // const displayHrs = (a:number, b:number, c:number) => {
    
  //   return a + b + c;
  // }
  
  // let d = displayHrs(1,2,3);

  const hrsType = [
    { id: 1, hrstag: 25, name: ' AcademyJS 25 Hrs' },
    { id: 2, hrstag: 25, name: ' Delivery 25 Hrs' },
    { id: 3, hrstag: 50, name: ' Talent Management 50 Hrs' },
  ];
  
  const result = hrsType.reduce((accumulator, obj) => {
    return accumulator + obj.hrstag;
  }, 0);

  const selectedIds = hrsType.map(({ name }) => name);
  //

  
  

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
      <Button id='displayHrs' aria-describedby={id} variant="contained" onClick={handleClick} >
       {result}
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
        <Typography sx={{ p: 2 }}>{selectedIds}</Typography>
      </Popover>
    </div>
  );
}