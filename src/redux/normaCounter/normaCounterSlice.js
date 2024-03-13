import { createSlice } from '@reduxjs/toolkit';

export const normaCounterSlice = createSlice({
    name: 'counter',
    initialState: {
      dailyNorma: 0,
      isModalOpen: false,
      isLoading: false,
      isError: null,
    },
    reducers: {
      changedailyNorma: (state, { payload }) => {
        state.dailyNorma = payload;
      },
    },
  
    extraReducers: builder => {
      builder
        // .addCase(getNormaThunk.fulfilled, (state, { payload }) => {
        //     state.dailyNorma = payload;
        //   state.isLoading = false;
        // })
    },
  });
  
  export const counterReducer = normaCounterSlice.reducer;
  export const { changedailyNorma } = normaCounterSlice.actions;