import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './displayhrs.css'
import {FC} from "react";
import {Hours} from "../../data/hours";

import {useTheme, styled} from "@mui/material";
import { themeColors } from '../../types/customs';


export interface HoursProps extends DisplayProps{
hours: Hours[]
}
  interface DisplayProps{
    color?: themeColors
  }

export const BasicPopover:FC<HoursProps> = ({hours, color}) => {

  const props = {
    color,
  };
  const theme= useTheme()


    const colors: { [key in themeColors]: string } = {
        "primary": theme.palette.primary.main,
        "secondary": theme.palette.secondary.main,
        "default": "#fff",
    };


    const StyledDiv = styled("div")<DisplayProps>`
    height: auto;
    background-color: #ffffff !important;
    display: flex;
    color: #1976d2 !important;
    font-size: 1.5em;
    font-weight: bolder !important;
    margin-left: 30px !important;
    margin-right: 30px !important;
    border-radius: 30rem !important;
  color: ${({ color="default" }) => colors[color as themeColors] };
  `;


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
    <StyledDiv {...props}>
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
    </StyledDiv>
  );
}