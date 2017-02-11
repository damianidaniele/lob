import React, {PropTypes} from 'react';

const SelectInput = ({name, label, defaultOption, options, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="control-label">{label}</label>
            <select
                className="form-control"
                id={name}
                name={name}
                onChange={onChange} >
                <option value="">{defaultOption}</option>
                {options.map( option => {
                    return (<option key={option.value} value={option.value}>{option.text}</option>);    
                })}
            </select> 
        </div>
    );
};

SelectInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    defaultOption: React.PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;