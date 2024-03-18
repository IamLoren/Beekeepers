import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios.js';
import { toast } from 'react-toastify';

// При виклику санки в параметрах передати {"dailyWaterNorma": number (min 0, max 1500)
// payload відповіді: оновлений повний обєкт юзера: {"_id": "", "password": " ", "email": "", "token": "", "dailyWaterNorma": Number, "gender": "", createdAt: date, updatedAt: date}

export const updateWaterRateThunk = createAsyncThunk(
  'water/rate',
  async ({ dailyWaterNorma, token }) => {
    try {
      const data = await api.patch(
        '/api/auth/water-rate',
        dailyWaterNorma,
        token
      );
      return data;
    } catch (error) {
      toast.error('Something went wrong');
      return error;
    }
  }
);
