import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { phoneFormatter } from 'helpers/phoneFormatter';

export default function PhoneNumberInput() {
  const [phone, setPhone] = useState('(61) ');

  return (
    <TextField
      sx={{ height: 54 }}
      label="Telefone"
      variant="outlined"
      color="primary"
      size="medium"
      value={ phone }
      onChange={ (e) => setPhone(phoneFormatter(e.target.value)) }
      fullWidth
      required
    />
  );
}
