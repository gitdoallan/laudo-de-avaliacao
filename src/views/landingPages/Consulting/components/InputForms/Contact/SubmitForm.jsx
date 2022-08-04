import React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';


export default function SubmitForm() {
  const { name, email, phone, neighborhood, categories } = useSelector(state => state.formInput);
  const handleSubmit = () => {
    console.log(name, email, phone, neighborhood, categories);
  };
  
  return (
    <Button
      sx={{ height: 54 }}
      variant="contained"
      color="primary"
      size="medium"
      onClick={handleSubmit}
      fullWidth
    >
      Enviar solicitação
    </Button>
  );
}
