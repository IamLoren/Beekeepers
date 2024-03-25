import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateAvatarThunk,
  updateUserThunk,
  verifyThunk,
} from './operations.js';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      gender: '',
      avatarURL: '',
      registrationDate: '',
      theme: 'light',
      verify: false,
      verificationToken: '',
    }, 
    var: '',
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
        state.user.gender = payload.gender;
        state.user.theme = payload.theme;
        state.user.verify = payload.verify;
        state.user.verificationToken = payload.verificationToken;
        state.var = payload.myEnvVariable;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state) => {
        toast.error('User already exists');
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        toast.error('Something went wrong. Try again later');
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.user.gender = payload.user.gender;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.name = payload.user.name;
        state.user.registrationDate = payload.user.createdAt.substring(0, 10);
        state.token = payload.token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = {
          email: '',
          name: '',
          gender: '',
          avatarURL: '',
          registrationDate: '',
        };
        state.token = '';
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.gender = payload.gender;
        state.user.avatarURL = payload.avatarURL;
        state.user.registrationDate = payload.createdAt.substring(0, 10);
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
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;

        state.isLoading = false;
        state.isError = null;
      })
      .addCase(updateAvatarThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateAvatarThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.gender = payload.gender;
        state.user.registrationDate = payload.createdAt.substring(0, 10);
        state.user.avatarURL = payload.avatarURL;
        state.user.theme = payload.theme;
        state.isLogged = true;
        state.isLoading = false;
        state.isRefresh = false;
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
        state.isRefresh = false;
      })
      .addCase(verifyThunk.fulfilled, (state) => {
        state.user.verify = true;
        state.isLogged = true;
      })
      .addCase(verifyThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyThunk.rejected, (state) => {
        state.isLoading = false;
        state.user.verify = false;
      });
  },
});

export const authReducer = authSlice.reducer;
