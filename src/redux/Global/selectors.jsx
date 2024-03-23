export const selectIsLoading = (state) => {
  return state.globalSlice.isLoading;
};

export const selectIsError = (state) => {
  return state.globalSlice.isError;
};

export const selectLanguage = (state) => {
  return state.globalSlice.language;
};
