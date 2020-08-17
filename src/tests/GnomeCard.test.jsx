import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import GnomeCard from '../components/global/GnomeCard';

describe('<GnomeCard /> tests', () => {
  test('Should render <GnomeCard /> correctly', () => {
    const wrapper = shallow(<GnomeCard />);

    wrapper.toMatchSnapshot();
  });
});
