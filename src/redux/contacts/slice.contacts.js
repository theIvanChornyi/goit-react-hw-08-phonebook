import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.contacts';
import { toast } from 'react-toastify';

import {
  addContactThunk,
  deleteContactThunk,
  getContacts,
  updateContactThunk,
} from './thunks.contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.warn(action.payload);
    },
    [addContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.addet = true;
    },
    [addContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      state.addet = false;
    },
    [addContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.addet = false;
      toast.warn(action.payload);
    },

    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.warn(action.payload);
    },

    [updateContactThunk.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateContactThunk.fulfilled]: (state, action) => {
      let changed = state.items.find(
        contact => contact.id === action.payload.id
      );
      changed.name = action.payload.name;
      changed.number = action.payload.number;
    },
    [updateContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.warn(action.payload);
    },
  },
});

export const contactReduser = contactsSlice.reducer;
