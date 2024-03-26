import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios.js';

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

export const updatePortionThunk = createAsyncThunk(
  'updatePortion',
  async ({ id, ...restCredentials }, thunkAPI) => {
    try {
      const { data } = await api.put(`/api/portions/${id}`, restCredentials);
      toast.success('Updated successfully');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
