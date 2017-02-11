import React from 'react';

const ActiveOrderRow = ({order, onClick}) => {
    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.userId}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td>{order.action}</td>
            <td><a href="#" onClick={onClick}><i className="glyphicon glyphicon-remove"></i></a></td>
        </tr>
    );
};

ActiveOrderRow.propTypes = {
    order: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
};

export default ActiveOrderRow;