import React from 'react';
import TextField from '@mui/material/TextField';
import { phoneFormatter } from 'helpers/phoneFormatter';
import { setInputPhone } from 'redux/slicers/formInputSlicer';
import { useDispatch, useSelector } from 'react-redux';

export default function PhoneNumberInput() {
  const dispatch = useDispatch();
  const { phone } = useSelector(state => state.formInput);

  return (
    <TextField
      sx={{ height: 54 }}
      label="Telefone"
      variant="outlined"
      color="primary"
      size="medium"
      value={ phone }
      onChange={ (e) => dispatch(setInputPhone(phoneFormatter(e.target.value))) }
      fullWidth
      required
    />
  );
}
