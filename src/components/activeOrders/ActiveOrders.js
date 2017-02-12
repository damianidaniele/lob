import React from 'react';
import ActiveOrderRow from './ActiveOrderRow';

const ActiveOrders = ({orders, deleteOrder}) => {
    return (
      <div>
        <h4>Active orders</h4>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-center">Order id</th>
              <th className="text-center">User</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
              <th className="text-center">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => ( <ActiveOrderRow key={order.id} order={order} onClick={deleteOrder}/>))}
          </tbody>
        </table>
      </div>
    );
};

ActiveOrders.propTypes = {
    orders: React.PropTypes.array.isRequired,
    deleteOrder: React.PropTypes.func.isRequired
};

export default ActiveOrders;