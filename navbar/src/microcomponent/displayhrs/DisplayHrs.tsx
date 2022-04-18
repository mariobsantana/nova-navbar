import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './displayhrs.css'

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  
  //Arrow Function to Test Hrs

  const hrsType = [
    { hrs: 15, name: ' AcademyJS' },
    { hrs: 25, name: ' Delivery' },
    { hrs: 50, name: ' Talent Management'},
  ];
  
  const result = hrsType.reduce((accumulator, obj) => {
    return accumulator + obj.hrs;
  }, 0);

  const selectedName = hrsType.map(({name}) => name);
  const selectedTag = hrsType.map(({hrs}) => hrs);

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
      <Button className='displayHrs' aria-describedby={id} variant="contained" onClick={handleClick} >
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
        <Typography sx={{ p: 2 }}>
        {selectedTag[0]} {'Hrs'} {selectedName[0]} <br/>
        {selectedTag[1]} {'Hrs'} {selectedName[1]} <br/>
        {selectedTag[2]} {'Hrs'} {selectedName[2]} <br/>
        </Typography>
      </Popover>
    </div>
  );
}