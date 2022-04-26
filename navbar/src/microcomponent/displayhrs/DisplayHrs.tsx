import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './displayhrs.css'
import {FC} from "react";
import {Hours} from "../../data/hours";

// import {useTheme, styled} from "@mui/material";
// import { themeColors } from '../../types/customs';


export interface HoursProps{
hours: Hours[]
}
  // interface DisplayProps{
  //   color?: themeColors
  // }

export const BasicPopover:FC<HoursProps> = ({hours}) => {

  // const props = {
  //   color,
  // };
  // const theme= useTheme()


  //   const colors: { [key in themeColors]: string } = {
  //       "primary": theme.palette.primary.main,
  //       "secondary": theme.palette.secondary.main,
  //       "default": "#fff",
  //   };


  //   const StyledDiv = styled("div")<DisplayProps>`
  //   font-size: 1rem;
  //   font-weight: normal;
  //   font-style: normal;
  //   font-stretch: normal;
  //   text-align: center;
  //   line-height: normal;
  //   letter-spacing: -0.3px;
  //   place-self: center;
  //   font-family: Work-Sans, sans-serif;
  //   margin: 0px 10px 0px 10px;
  // color: ${({ color="default" }) => colors[color as themeColors] };
  // `;


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
      <Button className='displayHrs'  aria-describedby={id} variant="contained" onClick={handleClick} >
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