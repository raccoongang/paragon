var _excluded = ["children", "icon", "actions", "dismissible", "onClose", "closeLabel", "stacked"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseAlert from 'react-bootstrap/Alert';
import divWithClassName from 'react-bootstrap/divWithClassName';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '..';
import breakpoints from '../utils/breakpoints';
import Button from '../Button';
import ActionRow from '../ActionRow';
var Alert = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      icon = _ref.icon,
      actions = _ref.actions,
      dismissible = _ref.dismissible,
      onClose = _ref.onClose,
      closeLabel = _ref.closeLabel,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(stacked),
      _useState2 = _slicedToArray(_useState, 2),
      isStacked = _useState2[0],
      setIsStacked = _useState2[1];

  var isExtraSmall = useMediaQuery({
    maxWidth: breakpoints.extraSmall.maxWidth
  });
  var actionButtonSize = 'sm';
  useEffect(function () {
    if (isExtraSmall) {
      setIsStacked(true);
    } else {
      setIsStacked(stacked);
    }
  }, [isExtraSmall, stacked]);
  var cloneActionElement = useCallback(function (Action) {
    var addtlActionProps = {
      size: actionButtonSize,
      key: Action.props.children
    };
    return /*#__PURE__*/React.cloneElement(Action, addtlActionProps);
  }, []);
  return /*#__PURE__*/React.createElement(BaseAlert, _extends({}, props, {
    className: classNames('alert-content', props.className),
    ref: ref
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    src: icon,
    className: "alert-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames({
      'pgn__alert-message-wrapper': !isStacked,
      'pgn__alert-message-wrapper-stacked': isStacked
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert-message-content"
  }, children), (dismissible || (actions === null || actions === void 0 ? void 0 : actions.length) > 0) && /*#__PURE__*/React.createElement(ActionRow, {
    className: "pgn__alert-actions"
  }, /*#__PURE__*/React.createElement(ActionRow.Spacer, null), dismissible && /*#__PURE__*/React.createElement(Button, {
    size: actionButtonSize,
    variant: "tertiary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: closeLabel,
    description: "Label of a close button on Alert component"
  })), actions && actions.map(cloneActionElement))));
}); // This is needed to display a default prop for Alert.Heading element
// Copied from react-bootstrap since BaseAlert.Heading component doesn't have defaultProps,
// so there seems to be no other way of providing correct default prop for base element

var DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';

var AlertHeading = function AlertHeading(props) {
  return /*#__PURE__*/React.createElement(BaseAlert.Heading, props);
};

var AlertLink = function AlertLink(props) {
  return /*#__PURE__*/React.createElement(BaseAlert.Link, props);
};

var commonPropTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
AlertLink.propTypes = commonPropTypes;
AlertHeading.propTypes = commonPropTypes;
AlertLink.defaultProps = {
  as: 'a',
  bsPrefix: 'alert-link'
};
AlertHeading.defaultProps = {
  as: DivStyledAsH4,
  bsPrefix: 'alert-heading'
};
Alert.propTypes = _objectSpread(_objectSpread({}, BaseAlert.propTypes), {}, {
  /** Docstring for the children prop */
  children: PropTypes.node,

  /** Docstring for the icon prop... Icon that will be shown in the alert */
  icon: PropTypes.func,

  /** Whether the alert is shown. */
  show: PropTypes.bool,

  /** Whether the alert is dismissible. Defaults to true. */
  dismissible: PropTypes.bool,

  /** Optional callback function for when the alert it dismissed. */
  onClose: PropTypes.func,

  /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
  actions: PropTypes.arrayOf(PropTypes.element),

  /** Position of the dismiss and call-to-action buttons. Defaults to ``false``. */
  stacked: PropTypes.bool,

  /** Sets the text for alert close button. */
  closeLabel: PropTypes.string
});
Alert.defaultProps = _objectSpread(_objectSpread({}, BaseAlert.defaultProps), {}, {
  children: undefined,
  icon: undefined,
  actions: undefined,
  dismissible: false,
  onClose: function onClose() {},
  closeLabel: 'Dismiss',
  show: true,
  stacked: false
});
Alert.Heading = AlertHeading;
Alert.Link = AlertLink;
export default Alert;
//# sourceMappingURL=index.js.map