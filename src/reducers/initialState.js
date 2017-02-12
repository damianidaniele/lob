export default {
  users: [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5'
  ],
  nextOrderId: 8,
  orders: [
    {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
    {id: 2, userId: 'user2', quantity: 10, price: 320, action: 'sell'},
    {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'},
    {id: 4, userId: 'user2', quantity: 20, price: 300, action: 'sell'},
    {id: 5, userId: 'user4', quantity: 30, price: 300, action: 'buy'},
    {id: 6, userId: 'user5', quantity: 10, price: 320, action: 'buy'},
    {id: 7, userId: 'user1', quantity: 30, price: 390, action: 'buy'},
  ]
};
