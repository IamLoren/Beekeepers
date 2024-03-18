import { createSlice } from '@reduxjs/toolkit';
import { updateWaterRateThunk } from './operations';
// import { selectIsLogged } from '../selectors';
// import { useSelector } from 'react-redux';

// const isLogged = useSelector(selectIsLogged);

export const normaCounterSlice = createSlice({
  name: 'counter',
  initialState: {
    dailyNorma: 1.5,
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeDailyNorma: (state, { payload }) => {
      state.dailyNorma = payload.dailyWaterNorma;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
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
export const { changeDailyNorma } = normaCounterSlice.actions;
