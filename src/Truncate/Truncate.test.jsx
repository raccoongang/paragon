import React from 'react';
import { mount } from 'enzyme';
import Truncate from './index';

describe('<Truncate />', () => {
  const wrapper = mount(
    <Truncate>
      Learners, course teams, researchers, developers.
    </Truncate>,
  );
  it('render with className', () => {
    wrapper.setProps({ className: 'pgn__truncate' });
    expect(wrapper.hasClass('pgn__truncate')).toEqual(true);
  });
});
