import {GET_USERS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  let newState;

  switch (action.type) {
    default:
      return state;
  }
}
