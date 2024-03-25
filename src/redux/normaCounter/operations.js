import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios.js';

export const updateWaterRateThunk = createAsyncThunk(
  'water/rate',
  async ({ dailyWaterNorma }, thunkApi) => {
    try {
      const response = await api.patch('/api/auth/water-rate', {
        dailyWaterNorma,
      });
      const data = response.data;
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
