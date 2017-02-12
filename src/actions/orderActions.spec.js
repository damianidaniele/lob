import * as types from '../constants/actionTypes';
import * as orderActions from './orderActions';
import {incrementOrderId} from './orderIdActions';

describe('Order Actions', () => {
    const storeMock = {
        orders: [
            {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
            {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
            {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'}
        ]
    };

    it('should create an action to delete an order', () => {
        const dispatch = jest.fn();
        const orderId = 1;

        const expected = {
            type: types.DELETE_ORDER,
            orderId
        };

        expect(typeof (orderActions.deleteOrder(orderId))).toEqual('function');
        orderActions.deleteOrder(orderId)(dispatch);
        expect(dispatch).toBeCalledWith(expected);
    });
    
    it('should create an action to save an order', () => {
        const dispatch = jest.fn();
        const order = {id: 4, userId: 'user3', quantity: 50, price: 300, action: 'buy'};

        const expected = {
            type: types.CREATE_ORDER,
            order
        };

        expect(typeof (orderActions.saveOrder(order))).toEqual('function');
        orderActions.saveOrder(order)(dispatch);
        expect(dispatch).toBeCalledWith(expected);
    });
});