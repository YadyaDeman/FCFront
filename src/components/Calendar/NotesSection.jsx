import React from 'react';
import { Box, Typography } from '@mui/material';

const NotesSection = () => {
  return (
    <Box mt={2}>
      <Typography variant="h6" sx={{ color: 'red' }}>Notes</Typography>
      <textarea rows="4" placeholder="Write your notes here..." style={{ width: '100%' }} />
    </Box>
  );
};

export default NotesSection;
