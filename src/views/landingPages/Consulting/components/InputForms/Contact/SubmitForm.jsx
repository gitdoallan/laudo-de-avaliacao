import React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { emailApi } from 'services/emailApi';


export default function SubmitForm() {
  const { name, email, phone, neighborhood, categories } = useSelector(state => state.formInput);
  
  return (
    <Button
      sx={{ height: 54 }}
      variant="contained"
      color="primary"
      size="medium"
      onClick={() => emailApi({ name, email, phone, neighborhood, categories })}
      fullWidth
    >
      Enviar solicitação
    </Button>
  );
}
