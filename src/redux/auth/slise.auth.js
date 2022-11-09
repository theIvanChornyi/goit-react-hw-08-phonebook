import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.auth';
import { toast } from 'react-toastify';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  signUpThunk,
} from './thunks.auth';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: {
    [signUpThunk.pending]: state => {
      state.isAuth = false;
    },
    [signUpThunk.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
    },
    [signUpThunk.rejected]: (state, action) => {
      state.isAuth = false;
      toast.warn(action.payload);
    },

    [logInThunk.pending]: state => {
      state.isAuth = false;
    },
    [logInThunk.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
    },
    [logInThunk.rejected]: (state, action) => {
      state.isAuth = false;
      toast.warn(action.payload);
    },

    [refreshUserThunk.pending]: state => {
      state.isFetched = false;
    },
    [refreshUserThunk.fulfilled]: state => {
      state.isFetched = false;
    },
    [refreshUserThunk.rejected]: (state, action) => {
      state.isFetched = true;
      toast.warn(action.payload);
    },

    [refreshUserThunk.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.user = { ...action.payload };
    },
    [refreshUserThunk.rejected]: state => {
      state.isAuth = false;
    },

    [logOutThunk.pending]: state => {
      state.isAuth = true;
    },
    [logOutThunk.fulfilled]: state => {
      state.isAuth = false;
      state.user = {};
      state.token = '';
    },
    [logOutThunk.rejected]: (state, action) => {
      state.isAuth = true;
      toast.warn(action.payload);
    },
  },
});

export const authReduser = authSlice.reducer;
