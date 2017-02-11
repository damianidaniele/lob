import React from 'react';

const NewOrderForm = () => {
    return (
        <form className="form-inline vertical-padded" role="form">
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
    );
};

export default NewOrderForm;