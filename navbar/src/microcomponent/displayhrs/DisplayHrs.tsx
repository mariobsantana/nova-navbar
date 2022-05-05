import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

// Button Properties
    const StyledButton = styled("button")<DisplayProps>`
    height: auto;
    width: 4rem;
    padding: .3em;
    display: relative;
    font-size: 1em ;
    border-radius: 5em;
    cursor: pointer;
    border: none;
    color: ${({ color = "primary" }) => colors[color as themeColors]};
  `;
    //First typo properties
  const StyledTypo = styled(Typography)<DisplayProps>`
    font-size: 1.2em;
    

    color: ${({ color = "primary" }) => colors[color as themeColors]};
  `;

  //Hrs typo properties
  const StyledTypoHrs = styled(Typography)<DisplayProps>`
  font-size: 1.2em;
  color: black;
`;
//Popover properties
    const StyledPop = styled(Popover)<DisplayProps>`

  `;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  //Hours Counter 
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
      <div {...props}> 
        <StyledButton  onClick={handleClick} >
         {totalHours}
        </StyledButton>
        <StyledPop {...props}
        //Popover layout properties
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
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