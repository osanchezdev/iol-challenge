import * as React from 'react';
import {shallow} from 'enzyme';
import InfoMessage from '../../src/components/global/InfoMessage';
import ResetFiltersBadge from '../../src/components/global/ResetFiltersBadge';
import ReloadPageButton from '../../src/components/global/ReloadPageButton';

describe('Tests in <InfoMessage />', () => {
  test('<InfoMessage /> must be rendered correctly', () => {
    const wrapper = shallow(<InfoMessage />);

    expect(wrapper).toMatchSnapshot();
  });

  test('<InfoMessage /> must show default message', () => {
    const defaultMessage = 'Hi there!';
    const wrapper = shallow(<InfoMessage />);
    const message = wrapper.find('h5').text();
    expect(message).toBe(defaultMessage);
  });

  test('<InfoMessage /> must show default emoji', () => {
    const defaultEmoji = '&#9996;';
    const wrapper = shallow(<InfoMessage />);
    const message = wrapper.find('span').text();

    expect(message).toBe(defaultEmoji);
  });

  test('<InfoMessage /> must show resetBadge with badgeLink prop', () => {
    const wrapper = shallow(<InfoMessage badgeLink />);
    const badgeLinkWrapper = wrapper.find(ResetFiltersBadge);

    expect(badgeLinkWrapper).toHaveLength(1);
  });

  test('<InfoMessage /> must show reloadPageButton with reloadButton prop', () => {
    const wrapper = shallow(<InfoMessage reloadButton />);
    const reloadButtonWrapper = wrapper.find(ReloadPageButton);

    expect(reloadButtonWrapper).toHaveLength(1);
  });
});
