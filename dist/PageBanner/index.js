import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close } from '../../icons';
import { Icon, IconButton } from '..';
export var VARIANTS = {
  light: 'light',
  dark: 'dark',
  warning: 'warning',
  accentA: 'accentA'
};

function PageBanner(_ref) {
  var children = _ref.children,
      dismissible = _ref.dismissible,
      dismissAltText = _ref.dismissAltText,
      onDismiss = _ref.onDismiss,
      show = _ref.show,
      variant = _ref.variant;

  if (!show) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__pageBanner-component', "pgn__pageBanner__".concat(variant)),
    role: "alert",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__pageBanner-content"
  }, children), dismissible && /*#__PURE__*/React.createElement("span", {
    className: "pgn__pageBanner-dismissButtonContainer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onDismiss,
    iconAs: Icon,
    alt: dismissAltText,
    src: Close,
    size: "inline",
    invertColors: variant === 'dark',
    variant: variant === 'dark' ? 'dark' : 'black'
  })));
}

PageBanner.propTypes = {
  /** An element rendered inside the `Page Banner`. */
  children: PropTypes.node,

  /** Boolean used to control whether `Page Banner` is dismissible. */
  dismissible: PropTypes.bool,

  /** An element to be set as the dismiss button's alt text (preferably a translated string). */
  dismissAltText: PropTypes.node,

  /** A function to be called on dismiss of the `Page Banner`. */
  onDismiss: PropTypes.func,

  /** Boolean used to control whether the Page Banner shows. */
  show: PropTypes.bool,

  /** A string designating which color variant of the `Page Banner` to display */
  variant: PropTypes.oneOf([VARIANTS.light, VARIANTS.dark, VARIANTS.warning, VARIANTS.accentA])
};
PageBanner.defaultProps = {
  children: undefined,
  dismissible: false,
  dismissAltText: 'Dismiss',
  onDismiss: function onDismiss() {},
  show: true,
  variant: VARIANTS.accentA
};
export default PageBanner;
//# sourceMappingURL=index.js.map