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
    selectedDay: {},
  },
  reducers: {
    changemonthlyPortions: (state, { payload }) => {
      state.monthlyPortions = payload;
    },
    changeSelectedDay: (state, { payload }) => {
      state.selectedDay = payload;
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
    // addPortion: (state, { payload }) => {
    //   state.portions.push(payload);
    // },
    // editPortion: (state, { payload }) => {
    //   const { id, amount, time } = payload;
    //   const portionToUpdate = state.portions.find(
    //     (portion) => portion.id === id
    //   );
    //   if (portionToUpdate) {
    //     portionToUpdate.amount = amount;
    //     portionToUpdate.time = time;
    //   }
    // },
    // deletePortion: (state, { payload }) => {
    //   const idToDelete = payload;
    //   state.portions = state.portions.filter((item) => item.id !== idToDelete);
    // },
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
        state.portions = state.portions.filter(
          (item) => item.id !== payload.id
        );
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
  // addPortion, editPortion, deletePortion,
  changeSelectedItem,
  changemonthlyPortions,
  clearStatisticData,
} = statisticDataSlice.actions;
