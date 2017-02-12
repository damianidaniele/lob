import React from 'react';

const ActiveOrderRow = ({order, onClick}) => {
    const deleteOrder = (event) => {
        onClick(event, order.id);
    };
    
    return (
        <tr>
            <td className="text-center">{order.id}</td>
            <td className="text-center">{order.userId}</td>
            <td className="text-right">{order.quantity}KG</td>
            <td className="text-right">£{order.price}</td>
            <td className="text-center">{order.action}</td>
            <td className="text-center">
                <a href="#" onClick={deleteOrder}><i className="glyphicon glyphicon-remove" /></a>
            </td>
        </tr>
    );
};

ActiveOrderRow.propTypes = {
    order: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
};

export default ActiveOrderRow;