import * as React from 'react';
import {shallow} from 'enzyme';
import Loader from '../../src/components/global/Loader';

describe('Tests on <Loader />', () => {
  test('v must be rendered correctly', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});
