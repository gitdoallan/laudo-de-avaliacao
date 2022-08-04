import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '(61) ',
  neighborhood: '',
  categories: [],
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
    },
    setInputCategories: (state, { payload }) => {
      state.categories = payload;
    }
  }
});

export const { setInputName, setInputEmail, setInputPhone, setInputNeighborhood, setInputCategories } = formInputSlice.actions;