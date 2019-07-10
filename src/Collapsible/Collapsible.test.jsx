import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Collapsible from '../Collapsible';


const collapsibleContent = (
  <React.Fragment>
    <Collapsible.Trigger className="trigger d-flex align-items-center">
      <h4 className="flex-grow-1">A heading</h4>

      <span className="collapsible-card-header-icon" aria-hidden>
        <Collapsible.Visible whenClosed>+</Collapsible.Visible>
        <Collapsible.Visible whenOpen>-</Collapsible.Visible>
      </span>
    </Collapsible.Trigger>

    <Collapsible.Trigger className="close-only" closeOnly>Close</Collapsible.Trigger>
    <Collapsible.Trigger className="open-only" openOnly>Open</Collapsible.Trigger>

    <Collapsible.Body transitionWrapper={<div />}>
      <p className="example-content">
        Example content
      </p>
    </Collapsible.Body>
  </React.Fragment>
);

const collapsibleIsOpen = (wrapper) => {
  expect(wrapper.find('.example-content').length).toEqual(1);
};

const collapsibleIsClosed = (wrapper) => {
  expect(wrapper.find('.example-content').length).toEqual(0);
};


describe('<Collapsible />', () => {
  describe('Uncontrolled Rendering', () => {
    it('renders closed by default', () => {
      const tree = renderer.create((
        <Collapsible>
          {collapsibleContent}
        </Collapsible>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders open by default', () => {
      const tree = renderer.create((
        <Collapsible defaultOpen>
          {collapsibleContent}
        </Collapsible>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Controlled Rendering', () => {
    it('renders closed by default', () => {
      const tree = renderer.create((
        <Collapsible open={false}>
          {collapsibleContent}
        </Collapsible>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders open by default', () => {
      const tree = renderer.create((
        <Collapsible>
          {collapsibleContent}
        </Collapsible>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Imperative Methods', () => {
    const wrapper = mount(<Collapsible>{collapsibleContent}</Collapsible>);
    const collapsible = wrapper.instance();

    collapsibleIsClosed(wrapper);

    it('opens on .open()', () => {
      collapsible.open();
      wrapper.update();
      collapsibleIsOpen(wrapper);
    });

    it('closes on .close()', () => {
      collapsible.close();
      wrapper.update();
      collapsibleIsClosed(wrapper);
    });
  });

  describe('Mouse Interactions', () => {
    const wrapper = mount(<Collapsible>{collapsibleContent}</Collapsible>);
    const collapsible = wrapper.instance();
    const trigger = wrapper.find('.trigger[role="button"]');
    const closeOnlyTrigger = wrapper.find('.close-only[role="button"]');
    const openOnlyTrigger = wrapper.find('.open-only[role="button"]');

    it('opens on trigger click', () => {
      trigger.simulate('click'); // Open
      collapsibleIsOpen(wrapper);
    });

    it('closes on trigger click', () => {
      trigger.simulate('click'); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not open on close only trigger click', () => {
      collapsible.close();
      wrapper.update();
      closeOnlyTrigger.simulate('click'); // No-op
      collapsibleIsClosed(wrapper);
    });

    it('closes on close only trigger click', () => {
      collapsible.open();
      wrapper.update();
      closeOnlyTrigger.simulate('click'); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not close on open only trigger click', () => {
      collapsible.open();
      wrapper.update();
      openOnlyTrigger.simulate('click'); // No-op
      collapsibleIsOpen(wrapper);
    });

    it('opens on opens only trigger click', () => {
      collapsible.close();
      wrapper.update();
      openOnlyTrigger.simulate('click'); // Open
      collapsibleIsOpen(wrapper);
    });
  });

  describe('Keyboard Interactions', () => {
    const wrapper = mount(<Collapsible>{collapsibleContent}</Collapsible>);
    const collapsible = wrapper.instance();
    const trigger = wrapper.find('.trigger[role="button"]');
    const closeOnlyTrigger = wrapper.find('.close-only[role="button"]');
    const openOnlyTrigger = wrapper.find('.open-only[role="button"]');

    it('opens on trigger enter keydown', () => {
      trigger.simulate('keyDown', { key: 'Enter' }); // Open
      collapsibleIsOpen(wrapper);
    });

    it('closes on trigger enter keydown', () => {
      trigger.simulate('keyDown', { key: 'Enter' }); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not open on close only trigger enter keydown', () => {
      collapsible.close();
      wrapper.update();
      closeOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // No-op
      collapsibleIsClosed(wrapper);
    });

    it('closes on close only trigger enter keydown', () => {
      collapsible.open();
      wrapper.update();
      closeOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not close on open only trigger enter keydown', () => {
      collapsible.open();
      wrapper.update();
      openOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // No-op
      collapsibleIsOpen(wrapper);
    });

    it('opens on opens only trigger enter keydown', () => {
      collapsible.close();
      wrapper.update();
      openOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // Open
      collapsibleIsOpen(wrapper);
    });
  });
});
