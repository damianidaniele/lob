import React from 'react';
import ActiveOrderRow from './ActiveOrderRow';

const ActiveOrders = ({orders, deleteOrder}) => {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Order id</th>
            <th>User</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => ( <ActiveOrderRow key={order.id} order={order} onClick={deleteOrder}/>))}
        </tbody>
      </table>
    );
};

ActiveOrders.propTypes = {
    orders: React.PropTypes.array.isRequired,
    deleteOrder: React.PropTypes.func.isRequired
};

export default ActiveOrders;