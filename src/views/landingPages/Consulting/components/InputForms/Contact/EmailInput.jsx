import React from 'react';
import TextField from '@mui/material/TextField';
import { setInputEmail } from 'redux/slicers/formInputSlicer';
import { useDispatch, useSelector } from 'react-redux';

export default function EmailInput() {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.formInput);

  return (
    <TextField
      sx={{ height: 54 }}
      label="Email"
      variant="outlined"
      color="primary"
      size="medium"
      value={ email }
      onChange={(e) => dispatch(setInputEmail(e.target.value))}
      fullWidth
      required
    />
  );
}
