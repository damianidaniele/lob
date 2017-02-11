import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import NewOrderForm from './NewOrderForm';
import ActiveOrders from './ActiveOrders';
import OrderSummary from './OrderSummary';

class DashboardManager extends React.Component {
    constructor(props, context) {
        super(props, context);

        // this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    render() {
        const users = this.props;
        
        return (
            <div className="col-xs-12">
                <h1 className="text-center">Live Order Board</h1>
                <h4>New order</h4>
                <NewOrderForm users={users}></NewOrderForm>

                <h4>Active orders</h4>
                <ActiveOrders></ActiveOrders>

                <h4>Total Sell Orders</h4>
                <OrderSummary></OrderSummary>
                
                <h4>Total Buy Orders</h4>
                <OrderSummary></OrderSummary>
            </div>
        );
    }
}

DashboardManager.propTypes = {
    users: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         // actions: bindActionCreators(courseActions, dispatch)
//     };
// }

export default connect(mapStateToProps)(DashboardManager);
