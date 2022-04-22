import * as React from 'react';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {FC} from "react";

type size = "small" | "medium" | "large";

export interface ArrowProps extends ButtonProps{
 onClick:()=>void;
}

export interface ButtonProps extends IconButtonProps{
   size?:size
}

export const ArrowsButtons:FC<ArrowProps> =({onClick, size, color}) =>{

/*
    const colors: { [key in themeColors]: string } = {
        "primary": theme.palette.primary.main,
        "secondary": theme.palette.secondary.main,
        "default": "#fff",
    };

    const sizes: { [key in size]: string } = {
        "small": ".6em",
        "medium": ".8em",
        "large": "1em",
    };

    const StyledButton = styled("button")<ButtonProps>`
    font-size: ${({ size="medium" }) => sizes[size as size] };
    padding: 0.6em 2em;
    border-radius:  18px;
    cursor: pointer;
    margin: 1em;
    border: 1px #fff solid;
    background-color: transparent;
    transition: transform 0.15s ease;
  color: ${({ color="default" }) => colors[color as themeColors] };
  border: 1px ${({ color="default" }) => colors[color as themeColors] } solid;
  &:focus{
    outline: none;
  }
  &:hover{
    transform: scale(1.02);
  }
  `;

*/


    return (
    <Stack spacing={2} direction="row">
        <IconButton aria-label="back" type="button" onClick={onClick} size={size} color={color}>
        <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton aria-label="forward" type="button" onClick={onClick} size={size} color={color}>
        <ArrowForwardIosIcon />
        </IconButton>

    </Stack>
  );
}
