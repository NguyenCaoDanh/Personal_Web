import { combineReducers } from 'redux';
import cartReducer from './cart';
import comment from './comment';

const rootReducer = combineReducers({
  cart: cartReducer, // Đặt tên đúng với Redux store
  comment,
});

export default rootReducer;
