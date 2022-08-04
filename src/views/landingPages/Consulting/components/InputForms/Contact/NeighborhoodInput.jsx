import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { neighborhoods } from 'data/neighborhoods';
import { setInputNeighborhood } from 'redux/slicers/formInputSlicer';
import { useDispatch, useSelector } from 'react-redux';

export default function NeighborhoodInput() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { neighborhood } = useSelector(state => state.formInput);

  const handleChange = (event) => {
    dispatch(setInputNeighborhood(event.target.value));
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
          Bairro *
      </InputLabel>
      <Select
        labelId="neighborhood-select"
        id="neighborhood-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={neighborhood}
        label="Bairro *"
        onChange={handleChange}
        required
      >
        {neighborhoods.map(({ id, name }) => (
          <MenuItem key={id} value={name}>{ name }</MenuItem>
        ))};
      </Select>
    </FormControl>
  );
}
