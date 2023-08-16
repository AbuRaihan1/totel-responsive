import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { increment, decrement } from './actions';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

// example reducer
// add your own reducer here
export default createReducer(initialState, {
  [increment.type]: (state: CounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
  [decrement.type]: (state: CounterState, action: PayloadAction<number>) => {
    state.value -= action.payload;
  }
});