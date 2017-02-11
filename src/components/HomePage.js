import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="col-xs-12">
      <h1 className="text-center">Live Order Board</h1>
      <form className="form-inline vertical-padded" role="form">
        <h4>New order</h4>
        <div className="form-group">
          <label htmlFor="selectUserId" className="control-label">
            User Id
          </label>
          <select id="selectUserId" className="form-control">
            <option>user1</option>
            <option>user2</option>
            <option>user3</option>
            <option>user4</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="inputQuantity" className="control-label">
            Quantity
          </label>
          <input id="inputQuantity" className="form-control" type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="inputPrice" className="control-label"> Price</label>
          <input id="inputPrice" className="form-control" type="number" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Buy</button>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Sell</button>
        </div>
      </form>

      <h4>Active orders</h4>
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
