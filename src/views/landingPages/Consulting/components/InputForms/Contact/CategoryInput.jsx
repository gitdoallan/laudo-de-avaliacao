import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxOptions() {
  return (
    <FormGroup>
      <FormLabel component="legend">Escolha a finalidade do laudo</FormLabel>
      <FormControlLabel control={<Checkbox />} label="Compra e Venda" />
      <FormControlLabel control={<Checkbox />} label="Locação" />
      <FormControlLabel control={<Checkbox />} label="Renovatória de Aluguel" />
      <FormControlLabel control={<Checkbox />} label="Inventário" />
      <FormControlLabel control={<Checkbox />} label="Garantia para Bancos" />
      <FormControlLabel control={<Checkbox />} label="Revisão de IPTU" />
    </FormGroup>
  );
}
