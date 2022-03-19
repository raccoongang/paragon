var _excluded = ["children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useIsVisible from '../hooks/useIsVisible';
export var CLASSNAME_SCROLL_TOP = 'pgn__scrollable-body-scroll-top';
export var CLASSNAME_SCROLL_BOTTOM = 'pgn__scrollable-body-scroll-bottom';

var Scrollable = function Scrollable(_ref) {
  var _classNames;

  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useIsVisible = useIsVisible(),
      _useIsVisible2 = _slicedToArray(_useIsVisible, 2),
      isScrolledToTop = _useIsVisible2[0],
      topSentinelRef = _useIsVisible2[1];

  var _useIsVisible3 = useIsVisible(),
      _useIsVisible4 = _slicedToArray(_useIsVisible3, 2),
      isScrolledToBottom = _useIsVisible4[0],
      bottomSentinelRef = _useIsVisible4[1];

  var className = classNames('pgn__scrollable-body', props.className, (_classNames = {}, _defineProperty(_classNames, CLASSNAME_SCROLL_TOP, isScrolledToTop), _defineProperty(_classNames, CLASSNAME_SCROLL_BOTTOM, isScrolledToBottom), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    ref: topSentinelRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "pgn__scrollable-body-content"
  }, children), /*#__PURE__*/React.createElement("div", {
    ref: bottomSentinelRef
  }));
};

Scrollable.propTypes = {
  /** Specifies the content of the `Scrollable`. */
  children: PropTypes.node.isRequired,

  /** Additional classnames for this component. */
  className: PropTypes.string
};
Scrollable.defaultProps = {
  className: undefined
};
export default Scrollable;
//# sourceMappingURL=index.js.map