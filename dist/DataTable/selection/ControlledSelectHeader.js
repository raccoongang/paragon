function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CheckboxControl } from '../../Form';
import DataTableContext from '../DataTableContext';
import { clearPageSelectionAction, setSelectedRowsAction } from './data/actions';

var ControlledSelectHeader = function ControlledSelectHeader(_ref) {
  var rows = _ref.rows;

  var _useContext = useContext(DataTableContext),
      itemCount = _useContext.itemCount,
      _useContext$controlle = _slicedToArray(_useContext.controlledTableSelections, 2),
      dispatch = _useContext$controlle[1],
      getToggleAllPageRowsSelectedProps = _useContext.getToggleAllPageRowsSelectedProps,
      selectedRowIds = _useContext.state.selectedRowIds,
      isAllPageRowsSelected = _useContext.isAllPageRowsSelected;

  var selectedPageRowIds = useMemo(function () {
    return Object.keys(selectedRowIds);
  }, [selectedRowIds]);
  var toggleAllPageRowsSelected = useCallback(function () {
    if (isAllPageRowsSelected) {
      dispatch(clearPageSelectionAction(selectedPageRowIds));
    } else {
      dispatch(setSelectedRowsAction(rows, itemCount));
    }
  }, [rows, selectedPageRowIds, isAllPageRowsSelected]);
  var toggleAllPageRowsSelectedProps = getToggleAllPageRowsSelectedProps();
  toggleAllPageRowsSelectedProps.isIndeterminate = toggleAllPageRowsSelectedProps.indeterminate; // delete unused ``indeterminate`` prop

  delete toggleAllPageRowsSelectedProps.indeterminate;
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-content-center p-1"
  }, /*#__PURE__*/React.createElement(CheckboxControl, _extends({}, toggleAllPageRowsSelectedProps, {
    onChange: toggleAllPageRowsSelected
  })));
};

ControlledSelectHeader.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired
};
export default ControlledSelectHeader;
//# sourceMappingURL=ControlledSelectHeader.js.map