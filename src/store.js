// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Counter Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// User Slice
const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Guest', email: '' },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { setUser } = userSlice.actions;

export default store;
