import React, {PropTypes} from 'react';

const SaveButton = ({save, value}) => {
    const doSave = (event) => {
        event.preventDefault();
        save(event, value);
    }; 

    return (
        <button type="submit" 
                className={"btn btn-primary " + value} 
                onClick={doSave}
                value={value} >{value}</button>
    );

};

SaveButton.propTypes = {
    save: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default SaveButton;