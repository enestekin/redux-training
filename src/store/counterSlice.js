import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
  value: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggle } =
  counterSlice.actions;

export default counterSlice.reducer;
