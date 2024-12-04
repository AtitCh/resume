import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface TabState {
  value: number;
}

const initialState: TabState = {
  value: 0, // Initial tab index (e.g., Home tab)
};

// Create the slice
const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Export the action for use in components
export const { setTab } = tabSlice.actions;

// Export the reducer to be added to the store
export default tabSlice.reducer;
