function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';
import { MoreVert } from '../../icons';
import { Dropdown, useWindowSize, Icon, IconButton, breakpoints, Button } from '..';
export var DROPDOWN_BUTTON_TEXT = 'More actions';
export var SMALL_SCREEN_DROPDOWN_BUTTON_TEXT = 'Actions';

var CollapsibleButtonGroup = function CollapsibleButtonGroup(_ref) {
  var className = _ref.className,
      actions = _ref.actions;

  var _useContext = useContext(DataTableContext),
      _useContext$controlle = _slicedToArray(_useContext.controlledTableSelections, 1),
      isEntireTableSelected = _useContext$controlle[0].isEntireTableSelected,
      selectedFlatRows = _useContext.selectedFlatRows,
      rows = _useContext.rows;

  var _useWindowSize = useWindowSize(),
      width = _useWindowSize.width;

  var selectedRows = selectedFlatRows || rows;

  var _useMemo = useMemo(function () {
    if (width < breakpoints.small.minWidth) {
      // On a small screen, all actions will be in the overflow menu
      return [[], _toConsumableArray(actions)];
    } // The first two actions will be displayed as buttons, the rest will go in an overflow menu


    // The first two actions will be displayed as buttons, the rest will go in an overflow menu
    var firstTwoActions = _toConsumableArray(actions).splice(0, 2);

    var extraActions = _toConsumableArray(actions).slice(2);
    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */


    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [actions, width]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      visibleActions = _useMemo2[0],
      dropdownActions = _useMemo2[1];

  if (!isEntireTableSelected && !selectedRows) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, dropdownActions.length > 0 && /*#__PURE__*/React.createElement(Dropdown, null, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: "secondary",
    iconAs: Icon,
    as: IconButton,
    src: MoreVert,
    alt: width > breakpoints.small.minWidth ? DROPDOWN_BUTTON_TEXT : SMALL_SCREEN_DROPDOWN_BUTTON_TEXT,
    id: "actions-dropdown"
  }), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    alignRight: true
  }, dropdownActions.map(function (action, index) {
    return /*#__PURE__*/React.cloneElement(action.component, _objectSpread({
      // eslint-disable-next-line react/no-array-index-key
      key: "".concat(action).concat(index),
      as: Dropdown.Item
    }, action.args));
  }))), visibleActions.map(function (action, index) {
    var _action$component$pro;

    return /*#__PURE__*/React.cloneElement(action.component, _objectSpread({
      // eslint-disable-next-line react/no-array-index-key
      key: "".concat(action).concat(index),
      as: ((_action$component$pro = action.component.props) === null || _action$component$pro === void 0 ? void 0 : _action$component$pro.as) || Button
    }, action.args));
  }));
};

CollapsibleButtonGroup.defaultProps = {
  className: null
};
CollapsibleButtonGroup.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    args: PropTypes.object
  })).isRequired
};
export default CollapsibleButtonGroup;
//# sourceMappingURL=CollapsibleButtonGroup.js.map