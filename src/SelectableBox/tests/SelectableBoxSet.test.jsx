import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { Form } from '../../index';
import SelectableBox from '../index';

const checkboxType = 'checkbox';
const checkboxText = (text) => `SelectableCheckbox${text}`;

const radioType = 'radio';
const radioText = (text) => `SelectableRadio${text}`;

const SelectableCheckboxSet = (props) => (
  <SelectableBox.Set name={radioType} type={checkboxType} {...props}>
    <SelectableBox value={1} type={checkboxType}>{checkboxText(1)}</SelectableBox>
    <SelectableBox value={2} type={checkboxType}>{checkboxText(2)}</SelectableBox>
    <SelectableBox value={3} type={checkboxType}>{checkboxText(3)}</SelectableBox>
  </SelectableBox.Set>
);

const SelectableRadioSet = (props) => (
  <SelectableBox.Set name={radioType} type={radioType} {...props}>
    <SelectableBox value={1} type={radioType}>{radioText(1)}</SelectableBox>
    <SelectableBox value={2} type={radioType}>{radioText(2)}</SelectableBox>
    <SelectableBox value={3} type={radioType}>{radioText(3)}</SelectableBox>
  </SelectableBox.Set>
);

describe('<SelectableBox />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <SelectableBox.Set name="testName">SelectableBox</SelectableBox.Set>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with children', () => {
      const wrapper = mount(<SelectableBox.Set name="testName">{checkboxText(1)}</SelectableBox.Set>);
      expect(wrapper.text()).toContain(checkboxText(1));
    });
    it('renders with on change event', () => {
      const onChangeSpy = jest.fn();
      const wrapper = mount(<SelectableCheckboxSet onChange={onChangeSpy} />);
      wrapper.props().onChange();
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with checkbox type', () => {
      const wrapper = mount(<SelectableCheckboxSet />);
      const selectableBox = wrapper.find(Form.CheckboxSet);
      expect(selectableBox.length).toEqual(1);
    });
    it('renders with radio type if neither checkbox nor radio is passed', () => {
      const wrapper = mount(<SelectableCheckboxSet type="text" />);
      const selectableBox = wrapper.find(Form.RadioSet);
      expect(selectableBox.length).toEqual(1);
    });
    it('renders with radio type', () => {
      const wrapper = mount(<SelectableRadioSet type={radioType} />);
      const selectableBox = wrapper.find(Form.RadioSet);
      expect(selectableBox.length).toEqual(1);
    });
  });
});
