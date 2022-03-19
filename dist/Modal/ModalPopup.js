var _excluded = ["children", "onClose", "isOpen", "positionRef", "isBlocking", "withPortal", "placement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import PopperElement from './PopperElement';
import { ModalContextProvider } from './ModalContext';

var ModalPopup = function ModalPopup(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      isOpen = _ref.isOpen,
      positionRef = _ref.positionRef,
      isBlocking = _ref.isBlocking,
      withPortal = _ref.withPortal,
      placement = _ref.placement,
      popperProps = _objectWithoutProperties(_ref, _excluded);

  var RootComponent = withPortal ? Portal : React.Fragment;
  return /*#__PURE__*/React.createElement(ModalContextProvider, {
    onClose: onClose,
    isOpen: isOpen,
    isBlocking: isBlocking
  }, /*#__PURE__*/React.createElement(RootComponent, null, /*#__PURE__*/React.createElement(PopperElement, _extends({
    target: positionRef,
    placement: placement
  }, popperProps), /*#__PURE__*/React.createElement(FocusOn, {
    scrollLock: false,
    enabled: isOpen,
    onEscapeKey: onClose,
    onClickOutside: onClose
  }, isOpen && /*#__PURE__*/React.createElement(React.Fragment, null, children)))));
};

ModalPopup.propTypes = {
  /** Specifies the contents of the modal */
  children: PropTypes.node.isRequired,

  /** A callback function for when the modal is dismissed */
  onClose: PropTypes.func.isRequired,

  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool.isRequired,

  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,

  /** Insert modal into a different location in the DOM */
  withPortal: PropTypes.bool,
  // This type: https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react

  /** Specifies an element near which the modal should be displayed */
  positionRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({})
  })]).isRequired,

  /** Specifies position according to the element that the ``positionRef`` prop points to */
  placement: PopperElement.propTypes.placement
};
ModalPopup.defaultProps = {
  isBlocking: false,
  withPortal: false,
  placement: 'bottom-start'
};
export default ModalPopup;
//# sourceMappingURL=ModalPopup.js.map