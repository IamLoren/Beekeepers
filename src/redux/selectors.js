export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectPortions = (state) => state.statisticDataSlice.portions;
export const selectDailyNorma = (state) => state.normaCounterSlice.dailyNorma;
export const selectIsModalOpen = (state) => state.normaCounterSlice.isModalOpen;
