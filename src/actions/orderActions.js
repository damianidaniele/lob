import * as types from '../constants/actionTypes';

export function deleteOrder(orderId) {
    return function(dispatch) {
        return dispatch({
            type: types.DELETE_ORDER,
            orderId
        });
    }
}