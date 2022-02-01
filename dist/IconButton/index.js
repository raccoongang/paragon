var _excluded = ["alt", "invertColors", "icon", "src", "iconClassNames", "onClick", "size", "variant", "iconAs", "isActive"],
    _excluded2 = ["tooltipPlacement", "tooltipContent", "variant", "invertColors"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from '..';
var IconButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var alt = _ref.alt,
      invertColors = _ref.invertColors,
      icon = _ref.icon,
      src = _ref.src,
      iconClassNames = _ref.iconClassNames,
      onClick = _ref.onClick,
      size = _ref.size,
      variant = _ref.variant,
      IconComponent = _ref.iconAs,
      isActive = _ref.isActive,
      attrs = _objectWithoutProperties(_ref, _excluded);

  var invert = invertColors ? 'inverse-' : '';
  var activeStyle = isActive ? "".concat(variant, "-") : '';
  return /*#__PURE__*/React.createElement("button", _extends({}, attrs, {
    "aria-label": alt,
    className: classNames('btn-icon', "btn-icon-".concat(invert).concat(variant), "btn-icon-".concat(size), _defineProperty({}, "btn-icon-".concat(invert).concat(activeStyle, "active"), isActive), attrs.className),
    onClick: onClick,
    type: "button",
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    className: "btn-icon__icon-container"
  }, /*#__PURE__*/React.createElement(IconComponent, {
    className: classNames('btn-icon__icon', iconClassNames),
    icon: icon,
    src: src
  })));
});
IconButton.defaultProps = {
  iconAs: FontAwesomeIcon,
  src: null,
  icon: {},
  iconClassNames: '',
  invertColors: false,
  variant: 'primary',
  size: 'md',
  onClick: function onClick() {},
  isActive: false
};
IconButton.propTypes = {
  iconAs: PropTypes.elementType,

  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@edx/paragon/dist/icon';`
   * */
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the IconButton. Instead, we recommend describing the function
   * of the button. */
  alt: PropTypes.string.isRequired,

  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,

  /** Accepts a React fontawesome icon. https://fontawesome.com/how-to-use/on-the-web/using-with/react */
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.array
  }),

  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,

  /** Click handler for the button */
  onClick: PropTypes.func,

  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black']),

  /** size of button to render */
  size: PropTypes.oneOf(['sm', 'md', 'inline']),

  /** whether to show the IconButton in an active state, whose styling is distinct from default state */
  isActive: PropTypes.bool
};
/**
 *
 * @param { object } args Arguments
 * @param { string } args.tooltipPlacement choose from https://popper.js.org/docs/v2/constructors/#options
 * @param { React.Component } args.tooltipContent any content to pass to tooltip content area
 * @returns { IconButton } a button wrapped in overlaytrigger
 */

var IconButtonWithTooltip = function IconButtonWithTooltip(_ref2) {
  var tooltipPlacement = _ref2.tooltipPlacement,
      tooltipContent = _ref2.tooltipContent,
      variant = _ref2.variant,
      invertColors = _ref2.invertColors,
      props = _objectWithoutProperties(_ref2, _excluded2);

  var invert = invertColors ? 'inverse-' : '';
  return /*#__PURE__*/React.createElement(OverlayTrigger, {
    placement: tooltipPlacement,
    overlay: /*#__PURE__*/React.createElement(Tooltip, {
      id: "iconbutton-tooltip-".concat(tooltipPlacement),
      variant: invert ? 'light' : ''
    }, tooltipContent)
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: variant,
    invertColors: invertColors
  }, props)));
};

IconButtonWithTooltip.defaultProps = {
  tooltipPlacement: 'top',
  variant: 'primary',
  invertColors: false
};
IconButtonWithTooltip.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: PropTypes.string,

  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: PropTypes.node.isRequired,

  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black']),

  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool
};
IconButton.IconButtonWithTooltip = IconButtonWithTooltip;
export default IconButton;
export { IconButtonWithTooltip };
//# sourceMappingURL=index.js.map