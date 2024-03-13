import { createSlice } from '@reduxjs/toolkit';

export const statisticDataSlice = createSlice({
    name: 'data',
    initialState: {
      portions: [],
      isModalOpen: false,
      isLoading: false,
      isError: null,
    },
    reducers: {
      addPortion: (state, { payload }) => {
        state.portions.push(payload);
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
  
  export const statisticDataReducer = statisticDataSlice.reducer;
  export const { addPortion } = statisticDataSlice.actions;