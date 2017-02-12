import React from 'react';
import {groupOrders} from '../../utils/utils';
import OrderSummaryRow from './OrderSummaryRow';

const OrderSummary = ({orders, filterBy}) => {
    const getOrderType = () => {return filterBy.split(':')[0]};
    const getOrderSort = () => {return filterBy.split(':')[1]}
    
    const getFilteredOrders = () => {
      return groupOrders(orders, getOrderType(), getOrderSort());
    };

    return (
      <div>
        <h4>Total {getOrderType()} orders</h4>
        <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Price</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredOrders().map(order => {
            return (<OrderSummaryRow key={order.price} order={order} />)
          })}
        </tbody>
      </table>
    </div>
    );
};

export default OrderSummary;