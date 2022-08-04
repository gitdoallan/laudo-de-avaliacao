import React from 'react';
import TextField from '@mui/material/TextField';
import { setInputName } from 'redux/slicers/formInputSlicer';
import { useDispatch, useSelector } from 'react-redux';

export default function NameInput() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.formInput);
  
  return (
    <TextField
      sx={{ height: 54 }}
      label="Nome"
      variant="outlined"
      color="primary"
      size="medium"
      value={ name }
      onChange={(e) => dispatch(setInputName(e.target.value))}
      fullWidth
      required
    />
  );
}
