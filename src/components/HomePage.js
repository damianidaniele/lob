import React from 'react';

import NewOrderForm from './NewOrderForm';
import ActiveOrders from './ActiveOrders';
import OrderSummary from './OrderSummary';

const HomePage = () => {
  return (
    <div className="col-xs-12">
      <h1 className="text-center">Live Order Board</h1>
      <h4>New order</h4>
      <NewOrderForm></NewOrderForm>

      <h4>Active orders</h4>
      <ActiveOrders></ActiveOrders>

      <h4>Total Sell Orders</h4>
      <OrderSummary></OrderSummary>
      
      <h4>Total Buy Orders</h4>
      <OrderSummary></OrderSummary>
    </div>
  );
};

export default HomePage;
