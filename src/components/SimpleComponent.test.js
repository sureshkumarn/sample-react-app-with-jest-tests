import React from 'react';
import Enzyme, { shallow } from 'enzyme'; // not needed when jest.setup.js is set
import Adapter from 'enzyme-adapter-react-16'; // not needed when jest.setup.js is set
import SimpleComponent from './SimpleComponent';

Enzyme.configure({ adapter: new Adapter() }); // not needed when jest.setup.js is set

const wrapper = shallow(<SimpleComponent />);

describe('(Component) SimpleComponent', () => {
  it('should render the component', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div > h1').length).toBe(1);
  });
});