import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../actions/orderActions';

import {mapArrayToObject} from '../utils/utils';

import NewOrderForm from './NewOrderForm';
import ActiveOrders from './ActiveOrders';
import OrderSummary from './OrderSummary';

class DashboardManager extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            users: mapArrayToObject(this.props.users),
            orders: this.props.orders,
            errors: {}
        };

        this.deleteOrder = this.deleteOrder.bind(this);

        console.log('this state', this.state);
    }

    onSave() {
        console.log('saving....');
    }

    onChange() {
        console.log('changing');
    }

    deleteOrder(event, orderId) {
        console.log('delete', event, orderId);
        this.props.actions.deleteOrder(orderId);
    }

    render() {
        return (
            <div className="col-xs-12">
                <h1 className="text-center">Live Order Board</h1>
                <h4>New order</h4>
                <NewOrderForm 
                    users={this.state.users}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSave={this.saveCourse}></NewOrderForm>

                <h4>Active orders</h4>
                <ActiveOrders orders={this.props.orders} deleteOrder={this.deleteOrder} ></ActiveOrders>

                <h4>Total Sell Orders</h4>
                <OrderSummary></OrderSummary>
                
                <h4>Total Buy Orders</h4>
                <OrderSummary></OrderSummary>
            </div>
        );
    }
}

DashboardManager.propTypes = {
    users: PropTypes.array,
    orders: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users,
        orders: state.orders
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(orderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardManager);
