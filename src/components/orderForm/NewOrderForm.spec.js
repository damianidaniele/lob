import React from 'react';
import { shallow } from 'enzyme';
import NewOrderForm from './NewOrderForm';
import SelectInput from './../common/SelectInput';
import SaveButton from './../common/SaveButton';

const onSave = () => {};
const onChange = () => {};
    
const users = [
    {value: 'user1', text:'User1'},
    {value: 'user2', text:'User2'},
    {value: 'user3', text:'User3'}
];

const order = {
    userId: '',
    price: 0,
    quantity: 0
}

const errors = {};

describe('<NewOrderForm />', () => {
    it('should contain <SelectInput /> component', () => {
        const wrapper = shallow(<NewOrderForm 
                users={users} 
                order={order}
                onSave={onSave}
                onChange={onChange}
                errors={errors} />);
        const selectInput = wrapper.find('select');
        
        expect(selectInput).not.toBe(undefined);
    });

    it('should contain two input elements', () => {
        const wrapper = shallow(<NewOrderForm 
            users={users} 
            order={order}
            onSave={onSave}
            onChange={onChange}
            errors={errors} />);
        const inputQuantity = wrapper.find('input[name="quantity"]');
        const priceQuantity = wrapper.find('input[name="price"]');

        expect(inputQuantity).not.toBe(undefined);
        expect(inputQuantity.hasClass('form-control')).toBe(true);
        expect(inputQuantity.hasClass('form-control')).toBe(true);

        expect(priceQuantity).not.toBe(undefined);
        expect(priceQuantity.hasClass('form-control')).toBe(true);
    });

    it('should contain two <SaveButton /> component', () => {
        const wrapper = shallow(<NewOrderForm 
            users={users} 
            order={order}
            onSave={onSave}
            onChange={onChange}
            errors={errors} />);
        const buyButton = wrapper.find('<button value="Buy" />');
        const sellButton = wrapper.find('<button value="Sell"/>');

        expect(buyButton).not.toBe(undefined);
        expect(sellButton).not.toBe(undefined);
    });

    it('should display an error', () => {
        const errors = {
            quantity: 'wrong quantity'
        };
        const wrapper = shallow(<NewOrderForm 
            users={users} 
            order={order}
            onSave={onSave}
            onChange={onChange}
            errors={errors} />);

        let errorMessage = wrapper.find('div.error').childAt(2).text();
        expect(errorMessage).toEqual('wrong quantity');
    });
});