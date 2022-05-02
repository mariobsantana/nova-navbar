import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import './displayhrs.css'
import {FC} from "react";
import {Hours} from "../../data/hours";
import {useTheme, styled} from "@mui/material";
import { themeColors } from '../../types/customs';


export interface HoursProps extends DisplayProps {
hours: Hours[];
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


    const StyledButton = styled("button")<DisplayProps>`
    height: auto;
    width: 4rem;
    background-color: ${({ color = "primary" }) => colors[color as themeColors]};
    display: relative;
    font-size: 1.5em ;
    border-radius: 80rem;
    font-weight: bold;
    cursor: pointer;
    color: ${({ color = "default" }) => colors[color as themeColors]};
  `;

  const StyledTypo = styled(Typography)<DisplayProps>`
    font-size: 1.2em;
    

    color: ${({ color = "primary" }) => colors[color as themeColors]};
  `;

  const StyledTypoHrs = styled(Typography)<DisplayProps>`
  font-size: 1.2em;
  color: black;
`;

    const StyledPop = styled(Popover)<DisplayProps>`

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



  
  return ( 
    <div {...props}> 
      <StyledButton  onClick={handleClick} >
       {totalHours}
      </StyledButton>
      <StyledPop {...props}
        open={open}
       anchorOrigin={{
        vertical: 65,
        horizontal: 1550,
      }}
        onClose={handleClose}
      >
         {hours.map((option, index)=>(
  <StyledTypo {...props} sx={{ p: 2 }} key={index}>
         {option.name} 
         <StyledTypoHrs>
           {option.hrs} hrs
           </StyledTypoHrs>
         
  </StyledTypo>
      ))}
        
      </StyledPop>
    </div>
  );
}