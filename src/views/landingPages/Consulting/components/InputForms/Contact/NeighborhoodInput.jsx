import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { neighborhoods } from 'data/neighborhoods';

export default function ControlledOpenSelect() {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl sx={{
      minWidth: 120,
      width: 1,
      whiteSpace: 'nowrap',
    }}>
      <InputLabel
        id="neighborhood-select"
      >
          Bairro
      </InputLabel>
      <Select
        labelId="neighborhood-select"
        id="neighborhood-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={age}
        label="Age"
        onChange={handleChange}
        required
      >
        {neighborhoods.map(({ id, name }) => (
          <MenuItem key={id} value={id}>{ name }</MenuItem>
        ))};
      </Select>
    </FormControl>
  );
}
