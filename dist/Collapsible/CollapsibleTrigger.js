var _excluded = ["tag", "children", "openOnly", "closeOnly"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleTrigger(_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      openOnly = _ref.openOnly,
      closeOnly = _ref.closeOnly,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(CollapsibleContext),
      isOpen = _useContext.isOpen,
      open = _useContext.open,
      close = _useContext.close,
      toggle = _useContext.toggle;

  var handleToggle = function handleToggle(e) {
    if (openOnly) {
      open(e);
    } else if (closeOnly) {
      close(e);
    } else {
      toggle(e);
    }
  };

  var handleClick = useCallback(function (e) {
    if (props.onClick) {
      props.onClick(e);
    }

    handleToggle(e);
  });
  var handleKeyDown = useCallback(function (e) {
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }

    if (e.key === 'Enter') {
      handleToggle(e);
    }
  });
  return /*#__PURE__*/React.createElement(tag, _objectSpread(_objectSpread({}, props), {}, {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: 'button',
    tabIndex: 0,
    'aria-expanded': isOpen
  }), children);
}

CollapsibleTrigger.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,

  /** Specifies base element. */
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),

  /** Specifies whether toggling `Collapsible's` state will always trigger only open action. */
  openOnly: PropTypes.bool,

  /** Specifies whether toggling `Collapsible's` state will always trigger only close action. */
  closeOnly: PropTypes.bool,

  /** Callback fired when element gets clicked. */
  onClick: PropTypes.func,

  /** Callback fired when a key is pressed. */
  onKeyDown: PropTypes.func
};
CollapsibleTrigger.defaultProps = {
  children: undefined,
  tag: 'div',
  openOnly: false,
  closeOnly: false,
  onClick: undefined,
  onKeyDown: undefined
};
export default CollapsibleTrigger;
//# sourceMappingURL=CollapsibleTrigger.js.map