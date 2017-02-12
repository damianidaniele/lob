import * as ActionTypes from '../constants/actionTypes';
import orderReducer from './orderReducer';

describe('Order Reducer', () => {
  const getInitialState = () => {
    return [
        {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
        {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
        {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'},
        {id: 4, userId: 'user2', quantity: 20, price: 300, action: 'sell'},
        {id: 5, userId: 'user4', quantity: 30, price: 300, action: 'buy'},
        {id: 6, userId: 'user5', quantity: 10, price: 320, action: 'buy'},
        {id: 7, userId: 'user1', quantity: 30, price: 390, action: 'buy'}
    ];
  };

  it('should set initial state by default', () => {
    const action = { type: '' };
    const expected = getInitialState();

    expect(orderReducer(undefined, action)).toEqual(expected);
  });

  it('should handle DELETE_ORDER', () => {
    const orderId = 7;
    const action = { type: ActionTypes.DELETE_ORDER, orderId: orderId};
    const expected = getInitialState().filter(order => {
        return order.id !== orderId;
      });

    expect(orderReducer(getInitialState(), action)).toEqual(expected);
  });

  it('should handle CREATE_ORDER', () => {
    const order = {id: 8, userId: 'user1', quantity: 10, price: 320, action: 'buy'};
    const action = { type: ActionTypes.CREATE_ORDER, order: order };
    const expected = [...getInitialState(), order];
    
    expect(orderReducer(getInitialState(), action)).toEqual(expected);
  });
});
