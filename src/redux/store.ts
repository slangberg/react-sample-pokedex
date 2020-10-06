import { Action, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createDispatchHook, createSelectorHook } from 'react-redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { MOCK_POKEMON } from '../mocks/mock';

import global from './global';

const DEFAULT_STATE: RootState = {
  pokemon: MOCK_POKEMON
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
