export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectPortions = (state) => state.statisticDataSlice.portions;
export const selectDailyNorma = (state) => state.normaCounterSlice.dailyNorma;
export const selectIsModalOpen = (state) =>
  state.normaCounterSlice.modal.isModalOpen;

export const selectDailyNormaModal = (state) =>
  state.normaCounterSlice.modal.dailyNormaModal;

export const selectEditPortionModal = (state) =>
  state.normaCounterSlice.modal.editPortionModal;

export const selectDeletePortionModal = (state) =>
  state.normaCounterSlice.modal.deletePortionModal;
