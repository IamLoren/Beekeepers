import { createSlice } from '@reduxjs/toolkit';
import { updateWaterRateThunk } from './operations';
import { loginThunk, registerThunk } from '../auth/operations';

export const normaCounterSlice = createSlice({
  name: 'counter',
  initialState: {
    dailyNorma: 0,
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeDailyNorma: (state, { payload }) => {
      state.dailyNorma = payload.dailyWaterNorma;
    },
    clearNormaCounterData: (state) => {
      state.dailyNorma = 0;
      state.isLoading = false;
      state.isError = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.dailyNorma = payload.dailyNormaWater;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      })

      .addCase(loginThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.dailyNorma = payload.user.dailyNormaWater;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isError = payload;
      })

      .addCase(updateWaterRateThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.dailyNorma = payload.result.dailyWaterNorma;
        state.isLoading = false;
      })
      .addCase(updateWaterRateThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const counterReducer = normaCounterSlice.reducer;
export const { changeDailyNorma, clearNormaCounterData } =
  normaCounterSlice.actions;
