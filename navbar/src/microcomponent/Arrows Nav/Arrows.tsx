import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function ArrowsButtons() {
  return (
    <Stack spacing={2} direction="row">
        <IconButton aria-label="back">
        <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton aria-label="forward">
        <ArrowForwardIosIcon />
        </IconButton>
    </Stack>
  );
}
