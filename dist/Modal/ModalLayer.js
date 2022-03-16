import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext'; // istanbul ignore next

var ModalBackdrop = function ModalBackdrop(_ref) {
  var onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    // Focus lock is handling the keyboard eventfor us. Though adding a role="button"
    // would be appropriate, modal dialogs provide their own close button and this
    // would create a duplicative control.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    React.createElement("div", {
      className: "pgn__modal-backdrop",
      onClick: onClick
    })
  );
};

ModalBackdrop.propTypes = {
  onClick: PropTypes.func
};
ModalBackdrop.defaultProps = {
  onClick: undefined
}; // istanbul ignore next

var ModalContentContainer = function ModalContentContainer(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-content-container"
  }, children);
};

ModalContentContainer.propTypes = {
  children: PropTypes.node
};
ModalContentContainer.defaultProps = {
  children: null
};
/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */

var ModalLayer = function ModalLayer(_ref3) {
  var children = _ref3.children,
      onClose = _ref3.onClose,
      isOpen = _ref3.isOpen,
      isBlocking = _ref3.isBlocking;

  if (!isOpen) {
    return null;
  }

  var onClickOutside = !isBlocking ? onClose : null;
  return /*#__PURE__*/React.createElement(ModalContextProvider, {
    onClose: onClose,
    isOpen: isOpen,
    isBlocking: isBlocking
  }, /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(FocusOn, {
    allowPinchZoom: true,
    scrollLock: true,
    enabled: isOpen,
    onEscapeKey: onClose,
    onClickOutside: onClickOutside,
    className: "pgn__modal-layer"
  }, /*#__PURE__*/React.createElement(ModalContentContainer, null, /*#__PURE__*/React.createElement(ModalBackdrop, {
    onClick: onClickOutside
  }), children))));
};

ModalLayer.propTypes = {
  /** Specifies the contents of the modal */
  children: PropTypes.node.isRequired,

  /** A callback function for when the modal is dismissed */
  onClose: PropTypes.func.isRequired,

  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool.isRequired,

  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool
};
ModalLayer.defaultProps = {
  isBlocking: false
};
export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
//# sourceMappingURL=ModalLayer.js.map