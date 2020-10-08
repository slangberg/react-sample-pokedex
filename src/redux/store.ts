import { Action, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createDispatchHook, createSelectorHook } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import global from './global';

const DEFAULT_STATE: RootState = {
  loading: false,
  history: []
};
const MIDDLEWARE = [...getDefaultMiddleware(), thunk];

export const usePokeDispatch = createDispatchHook();

export const usePokeSelector = createSelectorHook();

export const store = configureStore({
  reducer: global,
  middleware: MIDDLEWARE,
  devTools: true,
  preloadedState: DEFAULT_STATE,
});

export type RootState = ReturnType<typeof global>;
export type DispatchExts = ThunkDispatch<RootState, undefined, Action<any>>;
