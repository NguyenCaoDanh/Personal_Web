import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart';
import comment from './reducers/comment';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    comment,
  },
});

export default store;
