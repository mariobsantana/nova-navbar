import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Arrows.css'
import {FC} from "react";

type size = "small" | "medium" | "large";
type themeColors = "primary" | "secondary" | "default";

export interface ArrowProps extends ButtonProps{
 onClick:()=>void;
}

export interface ButtonProps{
   color?:themeColors;
   size?:size
}

export const ArrowsButtons:FC<ArrowProps> =({onClick}) =>{

  return (
    <Stack spacing={2} direction="row">
        <IconButton aria-label="back" type="button" onClick={onClick}>
        <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton aria-label="forward" type="button" onClick={onClick}>
        <ArrowForwardIosIcon />
        </IconButton>

    </Stack>
  );
}
