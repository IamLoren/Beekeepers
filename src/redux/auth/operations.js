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
      console.log(data);
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
      return response.data;
    } catch (error) {
      toast.error(error.message);
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
      await api.post('api/auth/logout');
      localStorage.removeItem('auth');
      localStorage.removeItem('counter');
      localStorage.removeItem('data');
      clearToken();
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'auth/update',
  async (newUserData, ThunkAPI) => {
    try {
      const { data } = await api.patch(`api/auth/user`, newUserData);
      console.log(data);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      return ThunkAPI.rejectWithValue(error.message);
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
      console.log(data);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const verifyThunk = createAsyncThunk(
  'auth/verify',
  async (verificationToken, thunkAPI) => {
    try {
      const response = await api.get(`api/auth/verify/${verificationToken}`);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/avatar',
  async (avatarData, thunkAPI) => {
    try {
      const { data } = await api.patch('api/auth/avatar', avatarData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
