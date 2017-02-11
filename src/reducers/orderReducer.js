import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderReducer(state = initialState.orders, action) {

  switch (action.type) {
    case types.DELETE_ORDER:
      return state.filter(order => {
        return order.id !== action.orderId
      });

    default:
      return state;
  }
}
