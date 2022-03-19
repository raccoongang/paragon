var _excluded = ["children", "controlId", "isInvalid", "isValid", "size", "as"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroupContextProvider } from './FormGroupContext';

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      controlId = _ref.controlId,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      size = _ref.size,
      as = _ref.as,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(as, _objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__form-group', props.className)
  }), /*#__PURE__*/React.createElement(FormGroupContextProvider, {
    controlId: controlId,
    isInvalid: isInvalid,
    isValid: isValid,
    size: size
  }, children));
};

var SIZE_CHOICES = ['sm', 'lg'];
FormGroup.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies base element for the component. */
  as: PropTypes.elementType,

  /** Specifies id to use in the group, it will be used as `htmlFor` in `FormLabel` and as `id` in input components.
   *  Will be autogenerated if none is supplied. */
  controlId: PropTypes.string,

  /** Specifies whether to display components in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,

  /** Specifies whether to display components in valid state, this affects styling. */
  isValid: PropTypes.bool,

  /** Specifies size for the component. */
  size: PropTypes.oneOf(SIZE_CHOICES)
};
FormGroup.defaultProps = {
  as: 'div',
  className: undefined,
  controlId: undefined,
  isInvalid: false,
  isValid: false,
  size: undefined
};
export default FormGroup;
//# sourceMappingURL=FormGroup.js.map