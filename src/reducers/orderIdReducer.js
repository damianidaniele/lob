import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function orderReducer(state = initialState.nextOrderId, action) {

  switch (action.type) {
    case types.INCREMENT_ORDER_ID:
      return state + 1;

    default:
      return state;
  }
}