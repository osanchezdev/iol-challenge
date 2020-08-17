import * as React from 'react';
import {shallow} from 'enzyme';
import GnomeCard from '../../src/components/global/GnomeCard';

describe('Tests on <GnomeCard />', () => {
  test('<GnomeCard /> must be rendered correctly', () => {
    const wrapper = shallow(<GnomeCard />);

    expect(wrapper).toMatchSnapshot();
  });

  test('<GnomeCard /> must be show Unknown as gnome name by default', () => {
    const wrapper = shallow(<GnomeCard />);
    const cardName = wrapper.find('p').text();

    expect(cardName).toBe('Unknown');
  });

  test('<GnomeCard /> must show gnome name passed by props', () => {
    const gnomeCardData = {
      id: 0,
      name: 'Gnome name',
      thumbnail: 'https://via.placeholder.com/200x120?text=no-image',
    };
    const wrapper = shallow(<GnomeCard {...gnomeCardData} />);
    const cardName = wrapper.find('p').text();

    expect(cardName).toBe(gnomeCardData.name);
  });
});
