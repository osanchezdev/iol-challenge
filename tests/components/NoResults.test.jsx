import * as React from 'react';
import {shallow} from 'enzyme';
import NoResults from '../../src/components/global/NoResults';

describe('Tests in <Noresults />', () => {
  test('<Noresults /> must be rendered correctly', () => {
    const wrapper = shallow(<NoResults />);

    expect(wrapper).toMatchSnapshot();
  });
});
