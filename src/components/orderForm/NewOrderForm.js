import React from 'react';
import SelectInput from './../common/SelectInput';
import SaveButton from './../common/SaveButton';

const NewOrderForm = ({users, order, onSave, onChange, errors}) => {
    return (
        <div className="orderForm">
            <h4 className="text-center">New order</h4>
            
            <form className="form-inline vertical-padded" role="form">
                <SelectInput 
                    name="userId"
                    label="UserId"
                    defaultOption=""
                    options={users}
                    onChange={onChange}/>
                <div className="form-group">
                    <label htmlFor="inputQuantity" className="control-label"> Quantity</label>
                    <input id="inputQuantity"
                        name="quantity"
                        className="form-control" 
                        type="number"
                        value={order.quantity}
                        onChange={onChange} />                    
                </div>
                <div className="form-group">
                    <label htmlFor="inputPrice" className="control-label"> Price</label>
                    <input id="inputPrice"
                        name="price" 
                        className="form-control" 
                        type="number"
                        value={order.price}
                        onChange={onChange} />
                </div>
                <div className="form-group">
                    <SaveButton save={onSave} value="Buy" />
                </div>
                <div className="form-group">
                    <SaveButton save={onSave} value="Sell" />
                </div>
            </form>
            <div className="col-xs-12">
                {errors.userId && 
                    <div className="error"><i className="glyphicon glyphicon-alert" /> {errors.userId}</div>}
                {errors.quantity && 
                    <div className="error"><i className="glyphicon glyphicon-alert" /> {errors.quantity}</div>}
                {errors.price && 
                    <div className="error"><i className="glyphicon glyphicon-alert" /> {errors.price}</div>}
            </div>
        </div>
    );
};

NewOrderForm.propTypes = {
    users: React.PropTypes.array.isRequired,
    order: React.PropTypes.object,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
};

export default NewOrderForm;