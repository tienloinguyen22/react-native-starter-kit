/* eslint @typescript-eslint/no-explicit-any: "off" */

import createRematchPersist from '@rematch/persist';
import { init, RematchRootState } from '@rematch/core';
import storage from '@react-native-community/async-storage';
import { persistStore } from 'redux-persist';
import { models } from './models';

const persistPlugin = createRematchPersist({
  whitelist: ['userProfile'],
  throttle: 2000,
  version: 1,
  storage,
});

export const store = init({
  plugins: [persistPlugin],
  models,
});

export const persistor = persistStore(store, undefined);

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;
