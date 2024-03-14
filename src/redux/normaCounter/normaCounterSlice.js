import { createSlice } from '@reduxjs/toolkit';

export const normaCounterSlice = createSlice({
  name: 'counter',
  initialState: {
    dailyNorma: null,
    modal: {
      isModalOpen: false,
      dailyNormaModal: false,
      editPortionModal: false,
      deletePortionModal: false,
    },
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeDailyNorma: (state, { payload }) => {
      state.dailyNorma = payload;
    },
    changeModalOpen: (state, { payload }) => {
      state.modal.isModalOpen = payload;
    },

    changeEditPortionModal: (state, { payload }) => {
      state.modal.editPortionModal = payload;
    },
    deletePortionModal: (state, { payload }) => {
      state.modal.deletePortionModal = payload;
    },
    changeDailyNormaModal: (state, { payload }) => {
      state.modal.dailyNormaModal = payload;
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
export const {
  changeDailyNorma,
  changeModalOpen,
  deletePortionModal,
  changeDailyNormaModal,
  changeEditPortionModal,
  closeAllModals,
} = normaCounterSlice.actions;
