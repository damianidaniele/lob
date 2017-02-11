import {GET_USERS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderReducer(state = initialState.users, action) {
  let newState;

  switch (action.type) {
    case GET_USERS:
      return state;

    default:
      return state;
  }
}
