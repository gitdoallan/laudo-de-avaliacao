import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  neighborhood: '',
};

export const formInputSlice = createSlice({
  name: 'formInput',
  initialState,
  reducers: {
    setInputName: (state, { payload }) => {
      state.name = payload;
    },
    setInputEmail: (state, { payload }) => {
      state.email = payload;
    },
    setInputPhone: (state, { payload }) => {
      state.phone = payload;
    },
    setInputNeighborhood: (state, { payload }) => {
      state.neighborhood = payload;
    }
  }
});

export const { setInputName, setInputEmail, setInputPhone, setInputNeighborhood } = formInputSlice.actions;