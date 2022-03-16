var _excluded = ["body", "index", "placement", "target", "title", "totalCheckpoints"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import breakpoints from '../utils/breakpoints';
import CheckpointActionRow from './CheckpointActionRow';
import CheckpointBody from './CheckpointBody';
import CheckpointBreadcrumbs from './CheckpointBreadcrumbs';
import CheckpointTitle from './CheckpointTitle';
var Checkpoint = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var body = _ref.body,
      index = _ref.index,
      placement = _ref.placement,
      target = _ref.target,
      title = _ref.title,
      totalCheckpoints = _ref.totalCheckpoints,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkpointVisible = _useState2[0],
      setCheckpointVisible = _useState2[1];

  var isMobile = useMediaQuery({
    maxWidth: breakpoints.small.maxWidth
  });
  useEffect(function () {
    var targetElement = document.querySelector(target);
    var checkpoint = document.querySelector('#pgn__checkpoint');

    if (targetElement && checkpoint) {
      // Use the Popper library to translate the Checkpoint to its target's coordinates
      var checkpointPopper = createPopper(targetElement, checkpoint, {
        placement: isMobile ? 'top' : placement,
        modifiers: [{
          name: 'arrow',
          options: {
            padding: 25
          }
        }, {
          name: 'offset',
          options: {
            offset: [0, 20]
          }
        }, {
          name: 'preventOverflow',
          options: {
            padding: 20,
            tetherOffset: 35
          }
        }]
      });
      setCheckpointVisible(true);

      if (checkpointPopper) {
        checkpointPopper.forceUpdate();
      }
    }
  }, [target, isMobile]);
  useEffect(function () {
    if (checkpointVisible) {
      // Scroll the Checkpoint into view once its rendered
      var targetElement = document.querySelector(target);
      var targetOffset = targetElement.getBoundingClientRect().top;

      if (targetOffset < 0 || targetElement.getBoundingClientRect().bottom > global.innerHeight) {
        if (placement.includes('top')) {
          if (targetOffset < 0) {
            targetOffset *= -1;
          }

          targetOffset -= 280;
        } else {
          targetOffset -= 80;
        }

        global.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }

      var button = document.querySelector('.pgn__checkpoint-button_advance');
      button.focus();
    }
  }, [target, checkpointVisible]);
  var isLastCheckpoint = index + 1 === totalCheckpoints;
  var isOnlyCheckpoint = totalCheckpoints === 1;
  return /*#__PURE__*/React.createElement("div", {
    id: "pgn__checkpoint",
    className: "pgn__checkpoint",
    "aria-labelledby": "pgn__checkpoint-title",
    ref: ref,
    role: "dialog",
    style: {
      visibility: checkpointVisible ? 'visible' : 'hidden',
      pointerEvents: checkpointVisible ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Top of step ", index + 1), (title || !isOnlyCheckpoint) && /*#__PURE__*/React.createElement("div", {
    className: "pgn__checkpoint-header"
  }, /*#__PURE__*/React.createElement(CheckpointTitle, null, title), /*#__PURE__*/React.createElement(CheckpointBreadcrumbs, {
    currentIndex: index,
    totalCheckpoints: totalCheckpoints
  })), /*#__PURE__*/React.createElement(CheckpointBody, null, body), /*#__PURE__*/React.createElement(CheckpointActionRow, _extends({
    isLastCheckpoint: isLastCheckpoint
  }, props)), /*#__PURE__*/React.createElement("div", {
    id: "pgn__checkpoint-arrow",
    "data-popper-arrow": true
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Bottom of step ", index + 1));
});
Checkpoint.defaultProps = {
  advanceButtonText: null,
  body: null,
  dismissButtonText: null,
  endButtonText: null,
  placement: 'top',
  title: null
};
Checkpoint.propTypes = {
  /** The text displayed on the button used to advance the tour for the given Checkpoint. */
  advanceButtonText: PropTypes.node,

  /** The text displayed in the body of the Checkpoint */
  body: PropTypes.node,

  /** The text displayed on the button used to dismiss the tour for the given Checkpoint. */
  dismissButtonText: PropTypes.node,

  /** The text displayed on the button used to end the tour for the given Checkpoint. */
  endButtonText: PropTypes.node,

  /** The current index of the given Checkpoint */
  index: PropTypes.number.isRequired,

  /** A function that runs when triggering the `onClick` event of the advance
   * button for the given Checkpoint. */
  onAdvance: PropTypes.func.isRequired,

  /** A function that runs when triggering the `onClick` event of the dismiss
   * button for the given Checkpoint. */
  onDismiss: PropTypes.func.isRequired,

  /** A function that runs when triggering the `onClick` event of the advance
   * button if the given Checkpoint is the only or last Checkpoint in a tour. */
  onEnd: PropTypes.func.isRequired,

  /** A string that dictates the alignment of the Checkpoint around its target. */
  placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end', 'bottom', 'bottom-start', 'bottom-end']),

  /** The CSS selector for the Checkpoint's desired target. */
  target: PropTypes.string.isRequired,

  /** The text displayed in the title of the Checkpoint */
  title: PropTypes.node,

  /** The total number of Checkpoints in a tour */
  totalCheckpoints: PropTypes.number.isRequired
};
export default Checkpoint;
//# sourceMappingURL=Checkpoint.js.map