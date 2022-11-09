import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.filter';

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const { getFilter } = filterSlice.actions;
