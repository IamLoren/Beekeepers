import { createSlice } from '@reduxjs/toolkit';

export const normaCounterSlice = createSlice({
  name: 'counter',
  initialState: {
    dailyNorma: 1.8,
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeDailyNorma: (state, { payload }) => {
      state.dailyNorma = payload;
    },
  },
});

// extraReducers: (builder) => {
//   builder;
// .addCase(getNormaThunk.fulfilled, (state, { payload }) => {
//     state.dailyNorma = payload;
//   state.isLoading = false;
// })
//   },
// });

export const counterReducer = normaCounterSlice.reducer;
export const { changeDailyNorma } = normaCounterSlice.actions;
