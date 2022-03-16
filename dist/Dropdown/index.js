var _excluded = ["as", "bsPrefix"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import BaseDropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownDeprecated from './deprecated';
import { IconButton, Button } from '..';
var DropdownToggle = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var as = _ref.as,
      bsPrefix = _ref.bsPrefix,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  // hide arrow from the toggle if it is rendered as IconButton
  // because it hinders the positioning of IconButton
  var prefix = as === IconButton ? 'pgn__dropdown-toggle-iconbutton' : bsPrefix;
  return /*#__PURE__*/React.createElement(BaseDropdownToggle, _extends({}, otherProps, {
    as: as,
    bsPrefix: prefix,
    ref: ref
  }));
});
DropdownToggle.propTypes = {
  /** Specifies the base element. */
  as: PropTypes.elementType,

  /** Overrides underlying component base CSS class name. */
  bsPrefix: PropTypes.string,

  /** An html id attribute, necessary for assistive technologies, such as screen readers. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
DropdownToggle.defaultProps = {
  as: Button,
  bsPrefix: 'dropdown-toggle'
};
Dropdown.Deprecated = DropdownDeprecated;
Dropdown.Toggle = DropdownToggle;
export default Dropdown;
export { DropdownToggle };
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
//# sourceMappingURL=index.js.map