import React from 'react';
import SelectInput from './common/SelectInput';

const NewOrderForm = ({users, onSave, onChange, errors}) => {
    return (
        <form className="form-inline vertical-padded" role="form">
            <SelectInput 
                name="userId"
                label="UserId"
                defaultOption=""
                options={users}
                onChange={onChange}/>
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
    );
};

export default NewOrderForm;