
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../../configAxios/configAxios.js';
import { toast } from 'react-toastify';

// При виклику санки аргументом передати обʼєкт:
// (email: string, password: string}
// payload відповіді:
//(token: string)
// (email: string)
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('api/auth/register', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// При виклику санки аргументом передати обʼєкт:
// (email: string, password: string}
// payload відповіді:
//(token: string)
// (user:{email: string})
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('api/auth/login', credentials);
      setToken(response.data.token);
      console.log(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// При виклику санки передати Token:
// payload відповіді:
//204 No Content
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await api.delete('api/auth/logout');
      localStorage.removeItem('auth');
      clearToken();
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().authSlice.token;
    console.log(savedToken);
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue("Token doesn't exist");
    }

    try {
      const { data } = await api.get('api/auth/current');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
