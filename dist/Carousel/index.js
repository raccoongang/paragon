var _excluded = ["nextLabel", "prevLabel", "intl"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import BaseCarousel from 'react-bootstrap/Carousel';
import BaseCarouselItem from 'react-bootstrap/CarouselItem';
import BaseCarouselCaption from 'react-bootstrap/CarouselCaption';
import { injectIntl } from 'react-intl';
var Carousel = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var nextLabel = _ref.nextLabel,
      prevLabel = _ref.prevLabel,
      intl = _ref.intl,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var intlNextLabel = intl.formatMessage({
    id: 'pgn.Carousel.nextLabel',
    defaultMessage: nextLabel,
    description: 'Next slide button label in the Carousel, shown to screen readers only'
  });
  var intlPrevLabel = intl.formatMessage({
    id: 'pgn.Carousel.prevLabel',
    defaultMessage: prevLabel,
    description: 'Previous slide button label in the Carousel, shown to screen readers only'
  });
  return /*#__PURE__*/React.createElement(BaseCarousel, _extends({}, otherProps, {
    nextLabel: intlNextLabel,
    prevLabel: intlPrevLabel,
    ref: ref
  }));
});
var CarouselItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(BaseCarouselItem, _extends({}, props, {
    ref: ref
  }));
});
var CarouselCaption = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(BaseCarouselCaption, _extends({}, props, {
    ref: ref
  }));
});
Carousel.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,

  /** Controls the current visible slide. Defaults to `defaultActiveIndex` prop */
  activeIndex: PropTypes.number,

  /** Specifies default active index prop */
  defaultActiveIndex: PropTypes.number,

  /** Show the `Carousel's` previous and next arrows for changing the current slide. */
  controls: PropTypes.bool,

  /** Animates slides with a crossfade animation instead of the default slide animation. */
  fade: PropTypes.bool,

  /** Show a set of slide position indicators. */
  indicators: PropTypes.bool,

  /** The amount of time to delay between automatically cycling an item. */
  interval: PropTypes.number,

  /** Specifies whether the `Carousel` should react to keyboard events. */
  keyboard: PropTypes.bool,

  /** Override the default button icon for the "next" control */
  nextIcon: PropTypes.node,

  /** Label shown to screen readers only, can be used to show the next element in the `Carousel` */
  nextLabel: PropTypes.string,

  /** Callback fired when the active item changes. */
  onSelect: PropTypes.func,

  /** Callback fired when a slide transition ends. */
  onSlid: PropTypes.func,

  /** Callback fired when a slide transition starts. */
  onSlide: PropTypes.func,

  /** If set to "hover", pauses the cycling of the `Carousel` on mouseenter and
   * resumes the cycling of the carousel on mouseleave.
   * If set to false, hovering over the `Carousel` won't pause it.
   *
   * On touch-enabled devices, when set to "hover", cycling will pause on touchend
   * (once the user finished interacting with the `Carousel`) for two intervals,
   * before automatically resuming. Note that this is in addition to the above mouse behavior.
   */
  pause: PropTypes.oneOf(['hover', false]),

  /** Override the default button icon for the "previous" control */
  prevIcon: PropTypes.node,

  /** Label shown to screen readers only, can be used to show the
   * previous element in the `Carousel`. Set to null to deactivate. */
  prevLabel: PropTypes.string,

  /** Enables animation on the Carousel as it transitions between slides. */
  slide: PropTypes.bool,

  /** Whether the `Carousel` should support left/right swipe interactions on touchscreen devices. */
  touch: PropTypes.bool,

  /** Whether the `Carousel` should cycle continuously or have hard stops */
  wrap: PropTypes.bool,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
  intl: PropTypes.shape.isRequired
};
CarouselItem.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,

  /** The amount of time to delay between automatically cycling this specific item.
   * Will default to the `Carousel's` interval prop value if none is specified.
   */
  interval: PropTypes.number,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
CarouselCaption.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
Carousel.defaultProps = {
  as: 'div',
  activeIndex: undefined,
  defaultActiveIndex: 0,
  controls: true,
  fade: false,
  indicators: true,
  interval: 5000,
  keyboard: true,
  nextIcon: /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next',
  onSelect: undefined,
  onSlid: undefined,
  onSlide: undefined,
  pause: 'hover',
  prevIcon: /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  slide: true,
  touch: true,
  wrap: true,
  bsPrefix: 'carousel'
};
CarouselItem.defaultProps = {
  as: 'div',
  interval: undefined,
  bsPrefix: 'carousel-item'
};
CarouselCaption.defaultProps = {
  as: 'div',
  bsPrefix: 'carousel-caption'
};
Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;
export { CarouselItem };
export default injectIntl(Carousel);
//# sourceMappingURL=index.js.map