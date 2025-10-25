import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // add your slices here
  },
});
