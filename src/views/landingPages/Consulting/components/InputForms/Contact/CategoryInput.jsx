import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { categoriesData } from 'data/categories';
import { setInputCategories } from 'redux/slicers/formInputSlicer';
import { useDispatch, useSelector } from 'react-redux';

export default function CheckboxOptions() {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.formInput);

  const handleChange = (event) => {
    const currentChecked = categories;
    const newChecked = event.target.checked
      ? [...currentChecked, event.target.value]
      : currentChecked.filter(curr => curr !== event.target.value);
    dispatch(setInputCategories(newChecked));
  };

  return (
    <FormGroup>
      <FormLabel component="legend">Escolha a finalidade do laudo</FormLabel>
      {categoriesData.map(({ id, name }) => (
        <FormControlLabel
          key={id}
          control={<Checkbox
            value={name}
            onChange={handleChange}
            checked={categories.includes(name)}
          />}
          label={name}
        />
      ))}
    </FormGroup>
  );
}
