import { combineReducers } from 'redux';
import { AuthReducer as Auth } from './auth';
import { OrdersReducer as Orders } from './orders';

export default combineReducers({
  Auth,
  Orders
});
