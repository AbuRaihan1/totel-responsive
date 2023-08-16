import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';

//example store
// modify it according to your need
const store = configureStore({
    reducer: {
        counter: counterReducer
      }
});
  

export default store;