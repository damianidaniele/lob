import React from 'react';

const OrderSummary = () => {
    return (
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
    );
};

export default OrderSummary;