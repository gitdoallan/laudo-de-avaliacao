import { configureStore } from '@reduxjs/toolkit';
import { formInputSlice } from '../slicers/formInputSlicer';

export const store = configureStore({
  reducer: {
    formInput: formInputSlice.reducer,
  },
});
