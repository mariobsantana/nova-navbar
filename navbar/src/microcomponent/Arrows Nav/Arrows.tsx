import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import './Arrows.css'


export default function ArrowsButtons() {

  return (
    <Stack spacing={2} direction="row">
      <Link to="/routeA">
        <IconButton aria-label="back" type="button">
        <ArrowBackIosNewIcon />
        </IconButton>
        </Link>
        <Link to="/routeB">
        <IconButton aria-label="forward"type="button">
        <ArrowForwardIosIcon />
        </IconButton>
        </Link>

    </Stack>
  );
}
