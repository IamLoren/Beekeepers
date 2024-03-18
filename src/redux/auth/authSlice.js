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
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjgzMGQyNjM2NDk4ZDYwNDg2NjEyOCIsImlhdCI6MTcxMDc2NDI0MiwiZXhwIjoxNzEwODQ3MDQyfQ.9OTQzvJZ9eer8pxcM7NYIDP1IB85jpegMGqJJu75V2c',
    isLogged: true,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user.email = payload.email;
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
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        // state.user.name = payload.name;
        // state.user.email = payload.email;
        // state.isLogged = true;
        // state.isLoading = false;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.gender = payload.user.gender;
        state.user.avatarURL = payload.user.avatarURL;
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
// export const {} = authSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// // import {
// //   loginThunk,
// //   logoutThunk,
// //   refreshThunk,
// //   registerThunk,
// //   updateUserThunk,
// // } from './operations.js';
// import { toast } from 'react-toastify';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       email: '',
//       name: '',
//       gender: '',
//       avatarURL: '',
//     },
//     token: '',
//     isLogged: false,
//     isLoading: false,
//     isRefresh: false,
//     isError: null,
//   },
//   reducers: {
//     registerSuccess: (state, action) => {
//       const { payload } = action;
//       console.log(payload);
//       state.user.email = payload.email;
//       state.token = payload.token;
//       state.isLogged = true;
//       state.isLoading = false;
//     },
//     registerFailure: (state) => {
//       toast.error('Error! User exist!');
//       state.isLogged = false;
//       state.isLoading = false;
//     },
//     loginFailure: (state) => {
//       toast.error('Error! Something went wrong!');
//       state.isLogged = false;
//       state.isLoading = false;
//     },
//     loginSuccess: (state, action) => {
//       const { payload } = action;
//       state.user.email = payload.user.email;
//       state.user.name = payload.user.name;
//       state.token = payload.token;
//       state.isLogged = true;
//       state.isLoading = false;
//     },
//     logoutSuccess: (state) => {
//       state.user = {
//         email: '',
//         name: '',
//       };
//       state.token = '';
//       state.isLogged = false;
//       state.isLoading = false;
//     },
//     startLoading: (state) => {
//       state.isLoading = true;
//     },
//     updateUserSuccess: (state, action) => {
//       const { payload } = action;
//       state.user.name = payload.user.name;
//       state.user.email = payload.user.email;
//       state.user.gender = payload.user.gender;
//       state.user.avatarURL = payload.user.avatarURL;
//     },
//     refreshSuccess: (state, action) => {
//       const { payload } = action;
//       state.user.name = payload.user.name;
//       state.user.email = payload.user.email;
//       state.user.gender = payload.user.gender;
//       state.user.avatarURL = payload.user.avatarURL;
//       state.isLogged = true;
//       state.isLoading = false;
//     },
//     startRefresh: (state) => {
//       state.isLoading = true;
//       state.isLogged = true;
//       state.isRefresh = true;
//     },
//     refreshFailure: (state) => {
//       toast.error('You need to logIn!');
//       state.isLogged = false;
//       state.isLoading = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;
// export const {
//   registerSuccess,
//   registerFailure,
//   loginFailure,
//   loginSuccess,
//   logoutSuccess,
//   startLoading,
//   updateUserSuccess,
//   refreshSuccess,
//   startRefresh,
//   refreshFailure,
// } = authSlice.actions;
