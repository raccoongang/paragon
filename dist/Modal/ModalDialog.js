function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import ModalLayer from './ModalLayer';
import IconButton from '../IconButton';
import Icon from '../Icon';
import { Close } from '../../icons';
import ModalCloseButton from './ModalCloseButton';
import ModalDialogHeader from './ModalDialogHeader';
import ModalDialogTitle from './ModalDialogTitle';
import ModalDialogFooter from './ModalDialogFooter';
import ModalDialogBody from './ModalDialogBody';
import ModalDialogHero from './ModalDialogHero';

function ModalDialog(_ref) {
  var _classNames;

  var children = _ref.children,
      title = _ref.title,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      size = _ref.size,
      variant = _ref.variant,
      hasCloseButton = _ref.hasCloseButton,
      closeLabel = _ref.closeLabel,
      isFullscreenScroll = _ref.isFullscreenScroll,
      className = _ref.className,
      isFullscreenOnMobile = _ref.isFullscreenOnMobile,
      isBlocking = _ref.isBlocking;
  var isMobile = useMediaQuery({
    query: '(max-width: 767.98px)'
  });
  var showFullScreen = isFullscreenOnMobile && isMobile;
  return /*#__PURE__*/React.createElement(ModalLayer, {
    isOpen: isOpen,
    onClose: onClose,
    isBlocking: isBlocking
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": title,
    className: classNames('pgn__modal', (_classNames = {}, _defineProperty(_classNames, "pgn__modal-".concat(showFullScreen ? 'fullscreen' : size), size), _defineProperty(_classNames, "pgn__modal-".concat(variant), variant), _defineProperty(_classNames, 'pgn__modal-scroll-fullscreen', isFullscreenScroll), _classNames), className)
  }, hasCloseButton && /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-close-container"
  }, /*#__PURE__*/React.createElement(ModalCloseButton, {
    as: IconButton,
    iconAs: Icon,
    invertColors: variant === 'dark',
    src: Close,
    alt: closeLabel
  })), children));
}

ModalDialog.propTypes = {
  /**
   *  Specifies the content of the dialog
   */
  children: PropTypes.node.isRequired,

  /**
   * The aria-label of the dialog
   */
  title: PropTypes.string.isRequired,

  /**
   * A callback to close the modal dialog
   */
  onClose: PropTypes.func.isRequired,

  /**
   * Is the modal dialog open or closed
   */
  isOpen: PropTypes.bool,

  /**
   * The close 'x' icon button in the top right of the dialog box
   */
  hasCloseButton: PropTypes.bool,

  /**
   * Sizes determine the maximum width of the dialog box
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),

  /**
   * The visual style of the dialog box
   */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),

  /**
   * The label supplied to the close icon button if one is rendered
   */
  closeLabel: PropTypes.string,

  /**
   *  Specifies class name to append to the base element
   */
  className: PropTypes.string,

  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,

  /**
   * To show full screen view on mobile screens
   */
  isFullscreenOnMobile: PropTypes.bool,

  /**
   * Prevent clicking on the backdrop to close the modal
   */
  isBlocking: PropTypes.bool
};
ModalDialog.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: false,
  isFullscreenOnMobile: false,
  isBlocking: false
};
ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;
export default ModalDialog;
//# sourceMappingURL=ModalDialog.js.map