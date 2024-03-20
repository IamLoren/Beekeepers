import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios.js';
import { toast } from 'react-toastify';

// При виклику санки в параметрах передати {"dailyWaterNorma": number (min 0, max 15)
// payload відповіді: оновлений повний обєкт юзера: {result{"_id": "", "password": " ", "email": "", "token": "", "dailyWaterNorma": Number, "gender": "", createdAt: date, updatedAt: date}

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
