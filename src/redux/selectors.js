export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectDailyPortions = (state) =>
  state.statisticDataSlice.dailyPortions;
export const selectMonthlyPortions = (state) =>
  state.statisticDataSlice.monthlyPortions;
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
  state.statisticDataSlice.dailyPortions.reduce(
    (totalAmount, portion) => totalAmount + portion.amount,
    0
  );

export const selectUser = (state) => state.authSlice.user;
export const selectToken = (state) => state.authSlice.token;

export const selectMonthData = (state) =>
  state.statisticDataSlice.monthlyPortions;
export const selectDataOfRegistration = (state) =>
  state.authSlice.user.registrationDate;

export const selectIsLoading = (state) => state.authSlice.isLoading;
export const selectIsRefresh = (state) => state.authSlice.isRefresh;

export const selectIsGreetingModalOpen = (state) => state.statisticDataSlice.greetingModal;