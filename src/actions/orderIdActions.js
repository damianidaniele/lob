import * as types from '../constants/actionTypes';

export function incrementOrderId() {
    return function(dispatch) {
        return dispatch({
            type: types.INCREMENT_ORDER_ID
        });
    }
}