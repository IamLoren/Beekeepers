import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from './normaCounter/normaCounterSlice.js';
import { authReducer } from './auth/authSlice.js';
import { statisticDataReducer } from './statisticData/statisticDataSlice.js';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  
  const authPersistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token'],
  };
  
  const counterPersistConfig = {
    key: 'counter',
    storage,
    whitelist: ['dailyNorma'],
  };
  
  const dataPersistConfig = {
    key: 'data',
    storage,
    whitelist: ['portions'],
  };
  
  const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  const persistedCounterReducer = persistReducer(counterPersistConfig, counterReducer);
  const persistedDataReducer = persistReducer(dataPersistConfig, statisticDataReducer);
  
  export const store = configureStore({
    reducer: {
      authSlice: persistedAuthReducer,
      normaCounterSlice: persistedCounterReducer,
      statisticDataSlice: persistedDataReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    // devTools: process.env.NODE_ENV !== 'production',
  });
  
  export let persistor = persistStore(store);
