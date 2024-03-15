import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    isModalOpen: false,
    dailyNormaModal: false,
    editPortionModal: false,
    deletePortionModal: false,
    addWaterModal: false,
    settingModal: false,
    logoutModal: false,
    selectedItem: null,
  },

  reducers: {
    changeModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },

    changeDailyNormaModal: (state, { payload }) => {
      state.dailyNormaModal = payload;
    },
    changeEditPortionModal: (state, { payload }) => {
      state.editPortionModal = payload;
    },
    changeDeletePortionModal: (state, { payload }) => {
      state.deletePortionModal = payload;
    },
    changeAddModal: (state, { payload }) => {
      state.addWaterModal = payload;
    },
    changeSettingModal: (state, { payload }) => {
      state.settingModal = payload;
    },
    changeLogoutModal: (state, { payload }) => {
      state.logoutModal = payload;
    },
    closeModals: (state, { payload }) => {
      state.isModalOpen = payload;
      state.dailyNormaModal = payload;
      state.editPortionModal = payload;
      state.deletePortionModal = payload;
      state.addWaterModal = payload;
      state.settingModal = payload;
      state.logoutModal = payload;
    },
    changeSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
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

export const modalsReducer = modalsSlice.reducer;
export const {
  changeModalOpen,
  changeDailyNormaModal,
  changeEditPortionModal,
  changeDeletePortionModal,
  changeAddModal,
  changeSettingModal,
  changeLogoutModal,
  closeModals,
  changeSelectedItem,
} = modalsSlice.actions;
