function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';

var PopperElement = function PopperElement(_ref) {
  var children = _ref.children,
      target = _ref.target,
      strategy = _ref.strategy,
      placement = _ref.placement,
      modifiers = _ref.modifiers;
  var popperElement = useRef(null);
  var popperOptions = {
    modifiers: modifiers,
    strategy: strategy,
    placement: placement
  };

  var _usePopper = usePopper(target.current, popperElement.current, popperOptions),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: popperElement,
    style: _objectSpread(_objectSpread({}, styles.popper), {}, {
      zIndex: 2000
    })
  }, attributes.popper), children);
};

PopperElement.propTypes = {
  children: PropTypes.node,
  target: PropTypes.shape({
    current: PropTypes.node
  }).isRequired,
  strategy: PropTypes.oneOf(['absolute', 'fixed']),
  placement: PropTypes.oneOf(['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end']),
  modifiers: PropTypes.arrayOf(PropTypes.shape({}))
};
PopperElement.defaultProps = {
  children: undefined,
  strategy: 'absolute',
  placement: 'bottom-start',
  modifiers: [{
    name: 'flip',
    enabled: true
  }, {
    name: 'preventOverflow',
    options: {
      tether: false
    }
  }]
};
export default PopperElement;
//# sourceMappingURL=PopperElement.js.map