function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BaseToast from 'react-bootstrap/Toast';
import ToastContainer from './ToastContainer';
import { Button, IconButton } from '..';

function Toast(_ref) {
  var action = _ref.action,
      children = _ref.children,
      closeLabel = _ref.closeLabel,
      delay = _ref.delay,
      onClose = _ref.onClose,
      show = _ref.show;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      autoHide = _useState2[0],
      setAutoHide = _useState2[1];

  return /*#__PURE__*/React.createElement(ToastContainer, null, /*#__PURE__*/React.createElement(BaseToast, {
    autohide: autoHide,
    className: "toast",
    delay: delay,
    onClose: onClose,
    onBlur: function onBlur() {
      return setAutoHide(true);
    },
    onFocus: function onFocus() {
      return setAutoHide(false);
    },
    onMouseOut: function onMouseOut() {
      return setAutoHide(true);
    },
    onMouseOver: function onMouseOver() {
      return setAutoHide(false);
    },
    show: show
  }, /*#__PURE__*/React.createElement("div", {
    className: "toast-header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "small"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "toast-header-btn-container"
  }, /*#__PURE__*/React.createElement(IconButton, {
    alt: closeLabel,
    className: "align-self-start",
    icon: faTimes,
    onClick: function onClick() {
      return onClose();
    },
    variant: "primary",
    invertColors: true
  }))), action && /*#__PURE__*/React.createElement(Button, {
    as: action.href ? 'a' : 'button',
    href: action.href,
    onClick: action.onClick,
    size: "sm",
    variant: "inverse-outline-primary"
  }, action.label)));
}

Toast.defaultProps = {
  action: null,
  closeLabel: 'Close',
  delay: 5000
};
Toast.propTypes = {
  /** A string or an element that is rendered inside the main body of the `Toast`. */
  children: PropTypes.string.isRequired,

  /**
   * A function that is called on close. It can be used to perform
   * actions upon closing of the `Toast`, such as setting the "show"
   * element to false.
   * */
  onClose: PropTypes.func.isRequired,

  /** Boolean used to control whether the `Toast` shows */
  show: PropTypes.bool.isRequired,

  /**
   * Fields used to build optional action button.
   * `label` is a string rendered inside the button.
   * `href` is a link that will render the action button as an anchor tag.
   * `onClick` is a function that is called when the button is clicked.
   */
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),

  /**
   * Alt text for the `Toast`'s dismiss button. The recommended use is an i18n value.
   * The default is an English string.
   */
  closeLabel: PropTypes.string,

  /** Time in milliseconds for which the `Toast` will display. */
  delay: PropTypes.number
};
export default Toast;
//# sourceMappingURL=index.js.map