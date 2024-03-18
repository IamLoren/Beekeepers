import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios.js';
import { toast } from 'react-toastify';

// payload відповіді:
// [{_id: string(ObjectId), amount: number, time: string, dailyNorma: number, consumeRatio: number, timeStamp(createdAt: date, updatedAt: date)}]
export const fetchPortionsThunk = createAsyncThunk(
  'fetchPortions',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/api/portions');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// При виклику санки в параметрах передати date у форматі дд.мм.рррр
// payload відповіді:
// [{_id: string(ObjectId), amount: number, time: string, dailyNorma: number, consumeRatio: number, timeStamp(createdAt: date, updatedAt: date)}]
export const fetchDailyPortionsThunk = createAsyncThunk(
  'fetchDailyPortions',
  async (date, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/portions/today/${date}`);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// При виклику санки в параметрах передати date у форматі дд.мм.рррр
// payload відповіді:
// [{_id: string(ObjectId), amount: number, time: string, timeStamp(createdAt: date, updatedAt: date)}]
export const fetchMonthlyPortionsThunk = createAsyncThunk(
  'fetchMonthlyPortions',
  async (date, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/portions/month/${date}`);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// При виклику санки в параметрах передати id
// payload відповіді: { message: 'Deleted successfully' }
export const deletePortionThunk = createAsyncThunk(
  'deletePortion',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/api/portions/${id}`);
      toast.success('Deleted successfully');
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// При виклику санки аргументом передати об'єкт:
// {amount: number, time: string, dailyNorma: number, consumeRatio: number}
// payload відповіді:
// {_id: string(ObjectId), amount: number, time: string, timeStamp(createdAt: date, updatedAt: date)}
export const addPortionThunk = createAsyncThunk(
  'addPortion',
  async ({ amount, time, dailyNorma, consumeRatio }, thunkAPI) => {
    try {
      const { data } = await api.post('/api/portions', {
        amount,
        time,
        dailyNorma,
        consumeRatio,
      });
      toast.success('Added successfully');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// При виклику санки в параметрах передати id,
// а аргументом передати об'єкт:
// { amount: number, time: string, dailyNorma: number, consumeRatio: number }
// payload відповіді:
// {_id: string(ObjectId), amount: number, time: string, timeStamp(createdAt: date, updatedAt: date)}
export const updatePortionThunk = createAsyncThunk(
  'updatePortion',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.patch(
        `/api/portions/${credentials.id}`,
        credentials
      );
      toast.success('Updated successfully');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
