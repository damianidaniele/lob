import React from 'react';
import SelectInput from './common/SelectInput';
import SaveButton from './common/SaveButton';

const NewOrderForm = ({users, order, onSave, onChange, errors}) => {
    return (
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
    );
};

export default NewOrderForm;