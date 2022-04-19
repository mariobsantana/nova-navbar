import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './profile.css';
import { blue, grey } from '@mui/material/colors';
import Button from '@mui/material/Button';

export default function ImageAvatars() {
  return (
    <Button>
    <Stack className='profile' direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: grey[50], color:blue[700]}}>DL</Avatar>
    </Stack>
    </Button>
  );
}