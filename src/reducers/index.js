import { combineReducers } from 'redux';
import orders from './orderReducer';
import users from './userReducer';
import nextOrderId from './orderIdReducer';

const rootReducer = combineReducers({
  orders,
  users,
  nextOrderId
});

export default rootReducer;
