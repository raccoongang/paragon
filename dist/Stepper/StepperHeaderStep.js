import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StepperContext } from './StepperContext';
import Icon from '../Icon';
import { Check, Error } from '../../icons';

var StepperHeaderStep = function StepperHeaderStep(_ref) {
  var eventKey = _ref.eventKey,
      title = _ref.title,
      isActive = _ref.isActive,
      hasError = _ref.hasError,
      description = _ref.description,
      index = _ref.index;

  var _useContext = useContext(StepperContext),
      getIsComplete = _useContext.getIsComplete;

  var isComplete = getIsComplete(eventKey);
  var stepIcon = isComplete ? /*#__PURE__*/React.createElement(Icon, {
    src: Check
  }) : /*#__PURE__*/React.createElement("span", null, index + 1);
  var errorIcon = /*#__PURE__*/React.createElement(Icon, {
    src: Error
  });
  return /*#__PURE__*/React.createElement("li", {
    className: classNames('pgn__stepper-header-step', {
      'pgn__stepper-header-step-active': isActive,
      'pgn__stepper-header-step-has-error': hasError,
      'pgn__stepper-header-step-complete': isComplete
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-icon"
  }, hasError ? errorIcon : stepIcon), /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-title-description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-description"
  }, description)));
};

StepperHeaderStep.propTypes = {
  /**
   * An identifier of the `HeaderStep`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `HeaderStep` will be displayed.
   */
  eventKey: PropTypes.string.isRequired,

  /** A text of the `HeaderStep`. */
  title: PropTypes.string.isRequired,

  /** Specifies that this `HeaderStep` is active. */
  isActive: PropTypes.bool,

  /** Informs user if this `Step` has errors. */
  hasError: PropTypes.bool,

  /** A text under the `title`. */
  description: PropTypes.string,

  /** A number that will be display in the icon of the `HeaderStep`.  */
  index: PropTypes.number
};
StepperHeaderStep.defaultProps = {
  isActive: false,
  hasError: false,
  description: undefined,
  index: 0
};
export default StepperHeaderStep;
//# sourceMappingURL=StepperHeaderStep.js.map