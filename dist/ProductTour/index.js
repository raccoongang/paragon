function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Checkpoint from './Checkpoint';
var ProductTour = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var tours = _ref.tours;
  var tourValue = tours.filter(function (tour) {
    return tour.enabled;
  })[0];

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentCheckpointData = _useState2[0],
      setCurrentCheckpointData = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = useState(!!tourValue),
      _useState6 = _slicedToArray(_useState5, 2),
      isTourEnabled = _useState6[0],
      setIsTourEnabled = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      prunedCheckpoints = _useState8[0],
      setPrunedCheckpoints = _useState8[1];
  /**
   * Takes a list of checkpoints and verifies that each target string provided is
   * an element in the DOM.
   */


  var pruneCheckpoints = function pruneCheckpoints(checkpoints) {
    var checkpointsWithRenderedTargets = checkpoints.filter(function (checkpoint) {
      return !!document.querySelector(checkpoint.target);
    });
    setPrunedCheckpoints(checkpointsWithRenderedTargets);
  };

  useEffect(function () {
    if (tourValue) {
      if (!isTourEnabled) {
        setIsTourEnabled(tourValue.enabled);
      }

      pruneCheckpoints(tourValue.checkpoints);
      setIndex(tourValue.startingIndex || 0);
    }
  }, [tourValue]);
  useEffect(function () {
    if (isTourEnabled) {
      if (prunedCheckpoints) {
        setCurrentCheckpointData(prunedCheckpoints[index]);
      } else {
        pruneCheckpoints(tourValue.checkpoints);
      }
    }
  }, [index, isTourEnabled, prunedCheckpoints]);
  useEffect(function () {
    var handleEsc = function handleEsc(event) {
      if (isTourEnabled && event.keyCode === 27) {
        setIsTourEnabled(false);

        if (tourValue.onEscape) {
          tourValue.onEscape();
        }
      }
    };

    global.addEventListener('keydown', handleEsc);
    return function () {
      global.removeEventListener('keydown', handleEsc);
    };
  }, [currentCheckpointData]);

  if (!tourValue || !currentCheckpointData || !isTourEnabled) {
    return null;
  }

  var handleAdvance = function handleAdvance() {
    setIndex(index + 1);

    if (currentCheckpointData.onAdvance) {
      currentCheckpointData.onAdvance();
    }
  };

  var handleDismiss = function handleDismiss() {
    setIndex(0);
    setIsTourEnabled(false);

    if (currentCheckpointData.onDismiss) {
      currentCheckpointData.onDismiss();
    } else {
      tourValue.onDismiss();
    }

    setCurrentCheckpointData(null);
  };

  var handleEnd = function handleEnd() {
    setIndex(0);
    setIsTourEnabled(false);

    if (tourValue.onEnd) {
      tourValue.onEnd();
    }

    setCurrentCheckpointData(null);
  };

  return /*#__PURE__*/React.createElement(Checkpoint, {
    advanceButtonText: currentCheckpointData.advanceButtonText || tourValue.advanceButtonText,
    body: currentCheckpointData.body,
    currentCheckpointData: currentCheckpointData,
    dismissButtonText: currentCheckpointData.dismissButtonText || tourValue.dismissButtonText,
    endButtonText: currentCheckpointData.endButtonText || tourValue.endButtonText,
    index: index,
    onAdvance: handleAdvance,
    onDismiss: handleDismiss,
    onEnd: handleEnd,
    placement: currentCheckpointData.placement,
    target: currentCheckpointData.target,
    title: currentCheckpointData.title,
    totalCheckpoints: prunedCheckpoints.length,
    ref: ref
  });
});
ProductTour.defaultProps = {
  tours: {
    advanceButtonText: '',
    checkpoints: {
      advanceButtonText: '',
      body: '',
      dismissButtonText: '',
      endButtonText: '',
      onAdvance: function onAdvance() {},
      onDismiss: function onDismiss() {},
      placement: 'top',
      title: ''
    },
    dismissButtonText: '',
    endButtonText: '',
    onDismiss: function onDismiss() {},
    onEnd: function onEnd() {},
    onEscape: function onEscape() {},
    startingIndex: 0
  }
};
ProductTour.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.shape({
    /** The text displayed on all buttons used to advance the tour. */
    advanceButtonText: PropTypes.node,

    /** An array comprised of checkpoint objects supporting the following values: */
    checkpoints: PropTypes.arrayOf(PropTypes.shape({
      /** The text displayed on the button used to advance the tour for the given Checkpoint
       * (overrides the* `advanceButtonText` defined in the parent tour object). */
      advanceButtonText: PropTypes.node,

      /** The text displayed in the body of the Checkpoint */
      body: PropTypes.node,

      /** The text displayed on the button used to dismiss the tour for the given Checkpoint
       * (overrides the `dismissButtonText` defined in the parent tour object). */
      dismissButtonText: PropTypes.node,

      /** The text displayed on the button used to end the tour for the given Checkpoint
       * (overrides the `endButtonText` defined in the parent tour object). */
      endButtonText: PropTypes.node,

      /** A function that runs when triggering the `onClick` event of the advance
       * button for the given Checkpoint. */
      onAdvance: PropTypes.func,

      /** A function that runs when triggering the `onClick` event of the dismiss
       * button for the given Checkpoint (overrides the `onDismiss` function defined in the parent tour object). */
      onDismiss: PropTypes.func,

      /** A string that dictates the alignment of the Checkpoint around its target. */
      placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end', 'bottom', 'bottom-start', 'bottom-end']),

      /** The CSS selector for the Checkpoint's desired target. */
      target: PropTypes.string.isRequired,

      /** The text displayed in the title of the Checkpoint */
      title: PropTypes.node
    })),

    /** The text displayed on the button used to dismiss the tour. */
    dismissButtonText: PropTypes.node,

    /** Whether the tour is enabled. If there are multiple tours defined, only one should be enabled at a time. */
    enabled: PropTypes.bool.isRequired,

    /** The text displayed on the button used to end the tour. */
    endButtonText: PropTypes.node,

    /** A function that runs when triggering the `onClick` event of the dismiss button. */
    onDismiss: PropTypes.func,

    /** A function that runs when triggering the `onClick` event of the end button. */
    onEnd: PropTypes.func,

    /** A function that runs when pressing the Escape key. */
    onEscape: PropTypes.func,

    /** The index of the desired `Checkpoint` to render when the tour starts. */
    startingIndex: PropTypes.number,

    /** The ID of the tour */
    tourId: PropTypes.string.isRequired
  }))
};
export default ProductTour;
//# sourceMappingURL=index.js.map