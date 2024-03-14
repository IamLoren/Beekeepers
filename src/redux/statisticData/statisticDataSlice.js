import { createSlice } from '@reduxjs/toolkit';

export const statisticDataSlice = createSlice({
  name: 'data',
  initialState: {
    portions: [
      { id: 1, amount: 250, time: '07:00' },
      { id: 2, amount: 220, time: '11:00' },
      { id: 3, amount: 200, time: '14:00' },
      { id: 4, amount: 200, time: '14:00' },
      { id: 5, amount: 200, time: '14:00' },
      { id: 6, amount: 250, time: '14:00' },
    ],
    isModalOpen: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    addPortion: (state, { payload }) => {
      state.portions.push(payload);
    },
    changeModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
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