import { createStore } from 'redux';

import * as ActionTypes from '../constants/actionTypes';
import rootReducer from '../reducers';

const initialState = {
  users: [
    'user1',
    'user2',
    'user3'
  ],
  nextOrderId: 1,
  orders: []
};

describe('Store', () => {
  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const order1 = {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'};
    const order2 = {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'};
    const order3 = {id: 3, userId: 'user3', quantity: 10, price: 320, action: 'buy'};

    const orderId = 1;

    const actions = [
      { type: ActionTypes.CREATE_ORDER, order: order1 },
      { type: ActionTypes.CREATE_ORDER, order: order2 },
      { type: ActionTypes.DELETE_ORDER, orderId: orderId },
      { type: ActionTypes.CREATE_ORDER, order: order3 }
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    
    const expected = [
      {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
      {id: 3, userId: 'user3', quantity: 10, price: 320, action: 'buy'}
    ];

    expect(actual.orders).toEqual(expected);
  });
});
