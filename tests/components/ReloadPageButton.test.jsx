import * as React from 'react';
import {shallow} from 'enzyme';
import ReloadPageButton from '../../src/components/global/ReloadPageButton';

describe('Tests in <ReloadPageButton />', () => {
  test('<ReloadPageButton /> must be rendered correctly', () => {
    const wrapper = shallow(<ReloadPageButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
