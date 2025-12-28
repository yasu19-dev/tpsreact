import { configureStore } from '@reduxjs/toolkit';
import sportReducer from './sportSlice';

export const store = configureStore({
  reducer: {
    data: sportReducer,
  },
});