import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import tmdbReducer from './slices/configSlice';
import detailsReducer from './slices/detailsSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';

const combinedReducers = combineReducers({
  tmdb: tmdbReducer,
  home: homeReducer,
  details: detailsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: EncryptedStorage,
  // blacklist: ['tmdb'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
