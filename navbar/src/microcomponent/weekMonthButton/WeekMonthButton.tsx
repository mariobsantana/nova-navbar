import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FC } from "react";

type size = "small" | "medium" | "large";
type box = "contained" | "outlined" ;
export interface WeekMonthButton {
  onClickW?: () => void;
  onClickM?: () => void;
  size?: size;
  box?: box;
}

export const WeekMonthButtons:FC<WeekMonthButton> =({onClickW, onClickM, size, box}) =>{
      return (
      <ButtonGroup variant={box} data-testid="WMButton">
        <Button onClick={onClickM} size={size}>Month</Button>
        <Button onClick={onClickW} size={size}>Week</Button>
      </ButtonGroup>
    );
  }