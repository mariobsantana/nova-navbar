import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './profile.css';
import { blue, grey } from '@mui/material/colors';

export default function ImageAvatars() {
  return (
    
    <Stack className='profile' direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: grey[50], color:blue[700]}}>DL</Avatar>
    </Stack>
    
  );
}