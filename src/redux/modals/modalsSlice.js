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
  },
});

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
} = modalsSlice.actions;
