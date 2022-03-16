function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import { ChevronRight } from '../../icons';

var Breadcrumb = function Breadcrumb(_ref) {
  var links = _ref.links,
      activeLabel = _ref.activeLabel,
      spacer = _ref.spacer,
      clickHandler = _ref.clickHandler,
      variant = _ref.variant,
      isMobile = _ref.isMobile;
  var linkCount = links.length;
  var displayLinks = isMobile ? [links[linkCount - 1]] : links;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "breadcrumb",
    className: classNames('pgn__breadcrumb', "pgn__breadcrumb-".concat(variant))
  }, /*#__PURE__*/React.createElement("ol", {
    className: classNames('list-inline', 'd-flex', 'align-items-center', {
      'is-mobile': isMobile
    })
  }, displayLinks.map(function (_ref2, i) {
    var url = _ref2.url,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: url
    }, /*#__PURE__*/React.createElement("li", {
      className: classNames('list-inline-item')
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: "link-muted",
      href: url
    }, clickHandler && {
      onClick: clickHandler
    }), label)), (activeLabel || i + 1 < linkCount) && /*#__PURE__*/React.createElement("li", {
      className: "list-inline-item",
      role: "presentation"
    }, spacer || /*#__PURE__*/React.createElement(Icon, {
      src: ChevronRight,
      id: "spacer-".concat(i)
    })));
  }), !isMobile && activeLabel && /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item active",
    key: "active",
    "aria-current": "page"
  }, activeLabel)));
};

Breadcrumb.propTypes = {
  /** an array of objects with the properties `label` and `url` as strings. */
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })).isRequired,

  /** allows to add a label that is not a link to the end of the breadcrumb.
   * Defaults to `undefined`.
  */
  activeLabel: PropTypes.string,

  /** allows to add a custom element between the breadcrumb items.
   * Defaults to `>` rendered using the `Icon` component. */
  spacer: PropTypes.element,

  /** allows to add a custom function to be called `onClick` of a breadcrumb link.
   * The use case for this is for adding custom analytics to the component. */
  clickHandler: PropTypes.func,

  /** The `Breadcrumbs` style variant to use. */
  variant: PropTypes.oneOf(['light', 'dark']),

  /** The `Breadcrumbs` mobile variant view. */
  isMobile: PropTypes.bool
};
Breadcrumb.defaultProps = {
  activeLabel: undefined,
  spacer: undefined,
  clickHandler: undefined,
  variant: 'light',
  isMobile: false
};
export default Breadcrumb;
//# sourceMappingURL=index.js.map