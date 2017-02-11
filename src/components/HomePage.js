import React from 'react';

import NewOrderForm from './NewOrderForm';
import ActiveOrders from './ActiveOrders';

const HomePage = () => {
  return (
    <div className="col-xs-12">
      <h1 className="text-center">Live Order Board</h1>
      <h4>New order</h4>
      <NewOrderForm></NewOrderForm>

      <h4>Active orders</h4>
      <ActiveOrders></ActiveOrders>

      <h4>Total Sell Orders</h4>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Price</th>
            <th>Order Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>50KG</td>
            <td>£400.56</td>
            <td>123 - 456</td>
          </tr>
          <tr>
            <td>10KG</td>
            <td>£378.56</td>
            <td>478</td>
          </tr>
        </tbody>
      </table>
      
      <h4>Total Buy Orders</h4>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Price</th>
            <th>Order Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20KG</td>
            <td>£320.56</td>
            <td>431</td>
          </tr>
          <tr>
            <td>40KG</td>
            <td>£350.56</td>
            <td>123 - 456 - 433</td>
          </tr>
        </tbody>
      </table>
    </div>
          );
};

export default HomePage;
