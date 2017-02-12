import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../actions/orderActions';

import {mapArrayToObject} from '../utils/utils';

import NewOrderForm from './orderForm/NewOrderForm';
import ActiveOrders from './activeorders/ActiveOrders';
import OrderSummary from './OrderSummary';

class DashboardManager extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            users: mapArrayToObject(this.props.users),
            order: {userId: '', quantity: 0, price: 0, action: ''},
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
    }

    orderFormIsValid() {
        return true;
    }

    saveOrder(event, orderAction) {
        event.preventDefault();
        let order = this.state.order;
        order.action = orderAction.toLowerCase();
        order.id = this.props.nextOrderId;
        this.setState({order: order});
        if (!this.orderFormIsValid()) {
            return;
        }
        this.props.actions.saveOrder(this.state.order);
        order = {userId: '', quantity: 0, price: 0, action: ''};
        this.setState({order: order});
    }

    onChange(event) {
        const field = event.target.name;
        let order = this.state.order;
        order[field] = event.target.value;
        return this.setState({order: order});
    }

    deleteOrder(event, orderId) {
        this.props.actions.deleteOrder(orderId);
    }

    render() {
        return (
            <div className="col-xs-12">
                <h1 className="text-center">Live Order Board</h1>
                <NewOrderForm 
                    users={this.state.users}
                    order={this.state.order}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSave={this.saveOrder} />

                <h4>Active orders</h4>
                <ActiveOrders orders={this.props.orders} deleteOrder={this.deleteOrder} ></ActiveOrders>
                <OrderSummary orders={this.props.orders} filterBy="sell:asc"></OrderSummary>
                <OrderSummary orders={this.props.orders} filterBy="buy:desc"></OrderSummary>
            </div>
        );
    }
}

DashboardManager.propTypes = {
    actions: PropTypes.object.isRequired,
    users: PropTypes.array,
    orders: PropTypes.array,
    nextOrderId: PropTypes.number
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users,
        orders: state.orders,
        nextOrderId: state.nextOrderId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(orderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardManager);
