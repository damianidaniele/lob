import {mapArrayToObject, groupOrders} from './utils';

describe('Utils', () => {
    describe('mapArrayToObject', () => {
        it('maps an array of single element into object with keys value and text', () => {
            const startingArray = ['a', 'b', 'c'];
            const expected = [
                {value: 'a', text: 'a'},
                {value: 'b', text: 'b'},
                {value: 'c', text: 'c'}
            ];

            expect(mapArrayToObject(startingArray)).toEqual(expected);
        });
    });
    
    describe('groupOrders', () => {
        it('return an array of buy orders grouped by price sorted ascending', () => {
            const startingArray = [
                {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
                {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
                {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'},
                {id: 4, userId: 'user2', quantity: 20, price: 300, action: 'sell'},
                {id: 5, userId: 'user4', quantity: 30, price: 300, action: 'buy'},
                {id: 6, userId: 'user5', quantity: 10, price: 320, action: 'buy'},
                {id: 7, userId: 'user1', quantity: 30, price: 390, action: 'buy'}
            ];
            const orderType = 'buy';
            const sortingOrder = 'asc';

            const expected = [
                {orders: [5, 1], price: 300, quantity: 80}, 
                {orders: [6, 3], price: 320, quantity: 20}, 
                {orders: [7], price: 390, quantity: 30}
            ];

            expect(groupOrders(startingArray, orderType, sortingOrder)).toEqual(expected);
        });
        
        it('return an array of buy orders grouped by price sorted descending', () => {
            const startingArray = [
                {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
                {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
                {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'},
                {id: 4, userId: 'user2', quantity: 20, price: 300, action: 'sell'},
                {id: 5, userId: 'user4', quantity: 30, price: 300, action: 'buy'},
                {id: 6, userId: 'user5', quantity: 10, price: 320, action: 'buy'},
                {id: 7, userId: 'user1', quantity: 30, price: 390, action: 'buy'}
            ];
            const orderType = 'buy';
            const sortingOrder = 'desc';

            const expected = [
                {price: 390, quantity: 30, orders: [7]},
                {price: 320, quantity: 20, orders: [6, 3]},
                {price: 300, quantity: 80, orders: [5, 1]}, 
            ];

            expect(groupOrders(startingArray, orderType, sortingOrder)).toEqual(expected);
        });
        
        it('return an array of sell orders grouped by price sorted descending', () => {
            const startingArray = [
                {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
                {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
                {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'},
                {id: 4, userId: 'user2', quantity: 20, price: 300, action: 'sell'},
                {id: 5, userId: 'user4', quantity: 30, price: 300, action: 'buy'},
                {id: 6, userId: 'user5', quantity: 10, price: 320, action: 'buy'},
                {id: 7, userId: 'user1', quantity: 30, price: 390, action: 'buy'}
            ];
            const orderType = 'sell';
            const sortingOrder = 'desc';

            const expected = [
                {price: 320, quantity: 10, orders: [2]},
                {price: 300, quantity: 20, orders: [4]}, 
            ];

            expect(groupOrders(startingArray, orderType, sortingOrder)).toEqual(expected);
        });
    });
});
