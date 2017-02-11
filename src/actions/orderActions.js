import * as types from '../constants/actionTypes';

export function getUsers() {
    return function(dispatch) {
        return dispatch({
            type: types.GET_USERS
        });
    }
}