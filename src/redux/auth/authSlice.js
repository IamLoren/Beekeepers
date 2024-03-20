import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateUserThunk,
} from './operations.js';
import { toast } from 'react-toastify';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      gender: '',
      avatarURL: '',
      registrationDate: '',
    },
    token: '',
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.registrationDate = payload.date.substring(0, 10);
        state.token = payload.token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state) => {
        toast.error('Error! User exist!');
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        toast.error('Error! Something went wrong!');
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;

        state.token = payload.token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = {
          email: '',
          name: '',
        };
        state.token = '';
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.gender = payload.user.gender;
        state.user.avatarURL = payload.user.avatarURL;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLoading = true;
        state.isLogged = true;
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        toast.error('You need to logIn!');
        state.isLogged = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
