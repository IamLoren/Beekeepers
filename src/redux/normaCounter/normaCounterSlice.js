import { createSlice } from '@reduxjs/toolkit';
import { updateWaterRateThunk } from './operations';

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
      state.dailyNorma = 1500;
      state.isLoading = false;
      state.isError = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.dailyNorma = payload.result.dailyWaterNorma;
        state.isLoading = false;
      })
      .addCase(updateWaterRateThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
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
