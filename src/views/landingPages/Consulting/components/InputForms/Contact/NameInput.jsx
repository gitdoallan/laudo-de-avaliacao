import React from 'react';
import TextField from '@mui/material/TextField';

export default function NameInput() {
  return (
    <TextField
      sx={{ height: 54 }}
      label="Nome"
      variant="outlined"
      color="primary"
      size="medium"
      fullWidth
      required
    />
  );
}
