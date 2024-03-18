export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectPortions = (state) => state.statisticDataSlice.portions;
export const selectDailyNorma = (state) => state.normaCounterSlice.dailyNorma;

export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;

export const selectDailyNormaModal = (state) =>
  state.modalsSlice.dailyNormaModal;

export const selectEditPortionModal = (state) =>
  state.modalsSlice.editPortionModal;

export const selectDeletePortionModal = (state) =>
  state.modalsSlice.deletePortionModal;

export const selectAddWaterModal = (state) => state.modalsSlice.addWaterModal;

export const selectSettingModal = (state) => state.modalsSlice.settingModal;

export const selectLogoutModal = (state) => state.modalsSlice.logoutModal;

export const selectSelectedItem = (state) =>
  state.statisticDataSlice.selectedItem;

export const selectPortionsAmount = (state) =>
  state.statisticDataSlice.portions.reduce(
    (totalAmount, portion) => totalAmount + portion.amount,
    0
  );

// export const selectUser = (state) => state.authSlice.user;
export const selectToken = (state) => state.authSlice.token;
