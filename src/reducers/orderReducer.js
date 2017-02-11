import {GET_USERS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderReducer(state = initialState.orders, action) {
  let newState;

  switch (action.type) {
    default:
      return state;
  }
}
