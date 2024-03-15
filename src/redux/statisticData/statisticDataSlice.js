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
    selectedItem: null,
  },
  reducers: {
    addPortion: (state, { payload }) => {
      state.portions.push(payload);
    },
    editPortion: (state, { payload }) => {
      const { id, amount, time } = payload;
      const portionToUpdate = state.portions.find(
        (portion) => portion.id === id
      );
      if (portionToUpdate) {
        portionToUpdate.amount = amount;
        portionToUpdate.time = time;
      }
    },
    deletePortion: (state, { payload }) => {
      const idToDelete = payload;
      state.portions = state.portions.filter((item) => item.id !== idToDelete);
    },
    changeSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder;
  // .addCase(getNormaThunk.fulfilled, (state, { payload }) => {
  //     state.dailyNorma = payload;
  //   state.isLoading = false;
  // })
  // },
});

export const statisticDataReducer = statisticDataSlice.reducer;
export const { addPortion, editPortion, deletePortion, changeSelectedItem } =
  statisticDataSlice.actions;
