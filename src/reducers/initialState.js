export default {
  users: [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5'
  ],
  nextOrderId: 5,
  orders: [
    {id: 1, userId: 'user1', quantity: 50, price: 300, action: 'buy'},
    {id: 2, userId: 'user2', quantity: 20, price: 340, action: 'buy'},
    {id: 3, userId: 'user1', quantity: 10, price: 320, action: 'buy'},
    {id: 4, userId: 'user4', quantity: 30, price: 350, action: 'sell'},
  ]
};
