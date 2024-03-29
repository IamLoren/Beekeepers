import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPortionsThunk,
  deletePortionThunk,
  addPortionThunk,
  updatePortionThunk,
  fetchDailyPortionsThunk,
  fetchMonthlyPortionsThunk,
} from './operations';

export const statisticDataSlice = createSlice({
  name: 'data',
  initialState: {
    portions: [],
    dailyPortions: [],
    monthlyPortions: [],
    isLoading: false,
    isError: null,
    selectedItem: {},
    selectedMonth: '',
    selectedDay: {},
    dailyProgress: 0,
    greetingModal: false,
  },
  reducers: {
    changemonthlyPortions: (state, { payload }) => {
      state.monthlyPortions = payload;
    },
    changeSelectedDay: (state, { payload }) => {
      state.selectedDay = payload;
    },
    changeSelectedMonth: (state, { payload }) => {
      state.selectedMonth = payload;
    },
    clearStatisticData: (state) => {
      state.portions = [];
      state.dailyPortions = [];
      state.monthlyPortions = [];
      state.isLoading = false;
      state.isError = null;
      state.selectedItem = null;
      state.selectedDay = {};
    },
    changeGreetingModal: (state, { payload }) => {
      state.greetingModal = payload;
    },
    changeDailyProgress: (state, { payload }) => {
      state.dailyProgress = payload;
    },
    changeSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPortionsThunk.fulfilled, (state, { payload }) => {
        state.portions = payload;
        state.isLoading = false;
      })
      .addCase(fetchDailyPortionsThunk.fulfilled, (state, { payload }) => {
        state.dailyPortions = payload;
        state.isLoading = false;
      })
      .addCase(fetchMonthlyPortionsThunk.fulfilled, (state, { payload }) => {
        state.monthlyPortions = payload;
        state.isLoading = false;
      })
      .addCase(deletePortionThunk.fulfilled, (state, { payload }) => {
        state.portions = state.portions.filter((item) => item.id !== payload);
      })
      .addCase(addPortionThunk.fulfilled, (state, { payload }) => {
        state.portions.push(payload);
      })
      .addCase(updatePortionThunk.fulfilled, (state, { payload }) => {
        const { id, amount, time } = payload;
        const portionToUpdate = state.portions.find(
          (portion) => portion.id === id
        );
        if (portionToUpdate) {
          portionToUpdate.amount = amount;
          portionToUpdate.time = time;
        }
      })
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isError = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      );
  },
});

export const statisticDataReducer = statisticDataSlice.reducer;
export const {
  changeSelectedItem,
  changemonthlyPortions,
  clearStatisticData,
  changeGreetingModal,
  changeSelectedMonth,
  changeDailyProgress,
} = statisticDataSlice.actions;
