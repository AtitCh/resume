import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './tabSlice.ts'; // We'll create this slice soon

// Configure the Redux store
export const store = configureStore({
  reducer: {
    tabs: tabReducer,
  },
});

// Infer the types for RootState and AppDispatch from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
