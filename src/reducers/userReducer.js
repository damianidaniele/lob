import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {

  switch (action.type) {
    default:
      return state;
  }
}
