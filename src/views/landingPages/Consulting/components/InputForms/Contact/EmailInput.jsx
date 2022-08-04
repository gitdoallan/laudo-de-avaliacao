import React from 'react';
import TextField from '@mui/material/TextField';

export default function EmailInput() {
  return (
    <TextField
      sx={{ height: 54 }}
      label="Email"
      variant="outlined"
      color="primary"
      size="medium"
      fullWidth
      required
    />
  );
}
