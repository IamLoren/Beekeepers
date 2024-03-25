import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './normaCounter/normaCounterSlice.js';
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
import { modalsReducer } from './modals/modalsSlice.js';
import { globalReducer } from './Global/globalSlice.jsx';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token', 'user', 'var'],
};

const counterPersistConfig = {
  key: 'counter',
  storage,
  whitelist: ['dailyNorma'],
};

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: ['portions', 'dailyPortions', 'monthlyPortions'],
};

const modalsPersistConfig = {
  key: 'modals',
  storage,
  whitelist: [],
};
const globalPersistConfig = {
  key: 'global',
  storage,
  whitelist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);
const persistedDataReducer = persistReducer(
  dataPersistConfig,
  statisticDataReducer
);
const persistedModalsReducer = persistReducer(
  modalsPersistConfig,
  modalsReducer
);
const persistedGlobalReducer = persistReducer(
  globalPersistConfig,
  globalReducer
);

export const store = configureStore({
  reducer: {
    authSlice: persistedAuthReducer,
    normaCounterSlice: persistedCounterReducer,
    statisticDataSlice: persistedDataReducer,
    modalsSlice: persistedModalsReducer,
    globalSlice: persistedGlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});

export let persistor = persistStore(store);
