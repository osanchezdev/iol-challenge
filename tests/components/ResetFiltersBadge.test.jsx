import * as React from 'react';
import {shallow} from 'enzyme';
import ResetFiltersBadge from '../../src/components/global/ResetFiltersBadge';

describe('Tests in <ResetFiltersBadge />', () => {
  test('<ResetFiltersBadge /> must be rendered correctly', () => {
    const wrapper = shallow(<ResetFiltersBadge />);

    expect(wrapper).toMatchSnapshot();
  });
});
