import * as types from '../constants/actionTypes';
import {incrementOrderId} from './orderIdActions';

export function deleteOrder(orderId) {
    return function(dispatch) {
        return dispatch({
            type: types.DELETE_ORDER,
            orderId
        });
    };
}

export function saveOrder(order) {
    return function(dispatch) {
        dispatch(incrementOrderId());
        return dispatch({
            type: types.CREATE_ORDER,
            order
        });
    };
}