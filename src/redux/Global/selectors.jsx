export const selectIsLoading = (state) => {
  return state.globalSlice.isLoading;
};

export const selectIsError = (state) => {
  return state.globalSlice.isError;
};
