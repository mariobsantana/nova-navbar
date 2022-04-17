import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";


export default function ArrowsButtons() {

  return (
    <Stack spacing={2} direction="row">
        <IconButton aria-label="back" type="button">
        <ArrowBackIosNewIcon />
        <Link to="/routeA">Home</Link>
        </IconButton>
        <IconButton aria-label="forward"type="button">
        <ArrowForwardIosIcon />
        </IconButton>
    </Stack>
  );
}
