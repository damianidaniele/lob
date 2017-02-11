import React from 'react';

const ActiveOrders = () => {
    return (
        <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>User id</th>
            <th>Order id</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user1</td>
            <td>123</td>
            <td>40KG</td>
            <td>£400.56</td>
            <td>BUY</td>
            <td><i className="glyphicon glyphicon-remove"></i></td>
          </tr>
          <tr>
            <td>user3</td>
            <td>456</td>
            <td>10KG</td>
            <td>£370.00</td>
            <td>SELL</td>
            <td><i className="glyphicon glyphicon-remove"></i></td>
          </tr>
          <tr>
            <td>user2</td>
            <td>178</td>
            <td>41KG</td>
            <td>£398.56</td>
            <td>BUY</td>
            <td><i className="glyphicon glyphicon-remove"></i></td>
          </tr>
          <tr>
            <td>user1</td>
            <td>576</td>
            <td>10KG</td>
            <td>£410.56</td>
            <td>BUY</td>
            <td><i className="glyphicon glyphicon-remove"></i></td>
          </tr>
          <tr>
            <td>user3</td>
            <td>365</td>
            <td>4KG</td>
            <td>£390.56</td>
            <td>SELL</td>
            <td><i className="glyphicon glyphicon-remove"></i></td>
          </tr>
        </tbody>
      </table>
    );
};

export default ActiveOrders;