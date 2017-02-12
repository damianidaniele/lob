import React from 'react';
import {shallow} from 'enzyme';
import ActiveOrderRow from './ActiveOrderRow';

const order = {
      id: 'order1',
      userId: 'user1',
      quantity: '10',
      price: '400',
      action: 'buy'
    };

const onClick = jest.fn();

describe('<ActiveOrderRow />', () => {
  it('should render a table row', () => {
    const wrapper = shallow(<ActiveOrderRow order={order} onClick={onClick}/>);

    expect(wrapper.type()).toEqual('tr');
  });
  
  it('should display all the order values', () => {
    const wrapper = shallow(<ActiveOrderRow order={order} onClick={onClick}/>);
    const rowLength = wrapper.find('tr').children().length;

    expect(rowLength).toEqual(6);
  });
  
  it('should display the correct values', () => {
    const wrapper = shallow(<ActiveOrderRow order={order} onClick={onClick}/>);
    const row = wrapper.find('tr').children();
    const firstCell = row.first().text();
    const thirdCell = wrapper.find('tr').childAt(2).first().text();

    expect(firstCell).toEqual('order1');
    expect(thirdCell).toEqual('10KG');
  });
  
  it('should invoke the callback when clicked on cancel icon', () => {
    const wrapper = shallow(<ActiveOrderRow order={order} onClick={onClick}/>);
    wrapper.find('a').simulate('click');
    
    expect(onClick).toBeCalled();
  });

});
