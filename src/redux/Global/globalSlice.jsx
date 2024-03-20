import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateUserThunk,
} from '../auth/operations';
import { updateWaterRateThunk } from '../normaCounter/operations';
import {
  addPortionThunk,
  deletePortionThunk,
  fetchDailyPortionsThunk,
  fetchMonthlyPortionsThunk,
  fetchPortionsThunk,
  updatePortionThunk,
} from '../statisticData/operations';

const initialState = {
  isLoading: false,
  isError: null,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.isError = null;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.isError = payload;
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilled)
      .addCase(registerThunk.rejected, handleRejected)

      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)

      .addCase(updateUserThunk.pending, handlePending)
      .addCase(updateUserThunk.fulfilled, handleFulfilled)
      .addCase(updateUserThunk.rejected, handleRejected)

      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, handleFulfilled)
      .addCase(logoutThunk.rejected, handleRejected)

      .addCase(refreshThunk.fulfilled, handleFulfilled)
      .addCase(refreshThunk.pending, handlePending)
      .addCase(refreshThunk.rejected, handleRejected)

      .addCase(updateWaterRateThunk.pending, handlePending)
      .addCase(updateWaterRateThunk.fulfilled, handleFulfilled)
      .addCase(updateWaterRateThunk.rejected, handleRejected)

      .addCase(fetchPortionsThunk.pending, handlePending)
      .addCase(fetchPortionsThunk.fulfilled, handleFulfilled)
      .addCase(fetchPortionsThunk.rejected, handleRejected)

      .addCase(fetchDailyPortionsThunk.pending, handlePending)
      .addCase(fetchDailyPortionsThunk.fulfilled, handleFulfilled)
      .addCase(fetchDailyPortionsThunk.rejected, handleRejected)

      .addCase(fetchMonthlyPortionsThunk.pending, handlePending)
      .addCase(fetchMonthlyPortionsThunk.fulfilled, handleFulfilled)
      .addCase(fetchMonthlyPortionsThunk.rejected, handleRejected)

      .addCase(deletePortionThunk.pending, handlePending)
      .addCase(deletePortionThunk.fulfilled, handleFulfilled)
      .addCase(deletePortionThunk.rejected, handleRejected)

      .addCase(addPortionThunk.pending, handlePending)
      .addCase(addPortionThunk.fulfilled, handleFulfilled)
      .addCase(addPortionThunk.rejected, handleRejected)

      .addCase(updatePortionThunk.pending, handlePending)
      .addCase(updatePortionThunk.fulfilled, handleFulfilled)
      .addCase(updatePortionThunk.rejected, handleRejected);
  },
});

export const globalReducer = globalSlice.reducer;
