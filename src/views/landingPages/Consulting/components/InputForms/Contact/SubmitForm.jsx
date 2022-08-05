import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm } from 'redux/slicers/formInputSlicer';
import { emailApi } from 'services/emailApi';


export default function SubmitForm() {
  const { name, email, phone, neighborhood, categories } = useSelector(state => state.formInput);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    emailApi({ name, email, phone, neighborhood, categories })
      .then(() => alert('Solicitação enviada com sucesso!'))
      .catch(() => alert('Erro ao enviar a solicitação! Por favor, tente novamente.'))
      .finally(() => dispatch(resetForm()));
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
