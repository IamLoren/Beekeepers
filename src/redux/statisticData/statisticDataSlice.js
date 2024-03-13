import { createSlice } from '@reduxjs/toolkit';

export const statisticDataSlice = createSlice({
  name: 'data',
  initialState: {
    portions: [
      { amount: 250, time: '7:00' },
      { amount: 220, time: '11:00' },
      { amount: 200, time: '14:00' },
      { amount: 200, time: '14:00' },
      { amount: 200, time: '14:00' },
      { amount: 250, time: '14:00' },
    ],
    isModalOpen: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    addPortion: (state, { payload }) => {
      state.portions.push(payload);
    },
  },

  extraReducers: (builder) => {
    builder;
    // .addCase(getNormaThunk.fulfilled, (state, { payload }) => {
    //     state.dailyNorma = payload;
    //   state.isLoading = false;
    // })
  },
});

export const statisticDataReducer = statisticDataSlice.reducer;
export const { addPortion } = statisticDataSlice.actions;
