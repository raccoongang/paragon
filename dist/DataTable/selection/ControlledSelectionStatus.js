function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';
import { clearSelectionAction, setSelectAllRowsAllPagesAction, setSelectedRowsAction } from './data/actions';
import { getUnselectedPageRows, getRowIds } from './data/helpers';
import { CLEAR_SELECTION_TEXT } from './data/constants';

var ControlledSelectionStatus = function ControlledSelectionStatus(_ref) {
  var className = _ref.className,
      clearSelectionText = _ref.clearSelectionText;

  var _useContext = useContext(DataTableContext),
      itemCount = _useContext.itemCount,
      rows = _useContext.rows,
      _useContext$controlle = _slicedToArray(_useContext.controlledTableSelections, 2),
      _useContext$controlle2 = _useContext$controlle[0],
      selectedRows = _useContext$controlle2.selectedRows,
      isEntireTableSelected = _useContext$controlle2.isEntireTableSelected,
      dispatch = _useContext$controlle[1];

  useEffect(function () {
    if (isEntireTableSelected) {
      var selectedRowIds = getRowIds(selectedRows);
      var unselectedPageRows = getUnselectedPageRows(selectedRowIds, rows);

      if (unselectedPageRows !== null && unselectedPageRows !== void 0 && unselectedPageRows.length) {
        dispatch(setSelectedRowsAction(unselectedPageRows, itemCount));
      }
    }
  }, [isEntireTableSelected, selectedRows, itemCount, rows]);
  var numSelectedRows = isEntireTableSelected ? itemCount : selectedRows.length;
  var selectionStatusProps = {
    className: className,
    numSelectedRows: numSelectedRows,
    clearSelectionText: clearSelectionText,
    onSelectAll: function onSelectAll() {
      return dispatch(setSelectAllRowsAllPagesAction());
    },
    onClear: function onClear() {
      return dispatch(clearSelectionAction());
    }
  };
  return /*#__PURE__*/React.createElement(BaseSelectionStatus, selectionStatusProps);
};

ControlledSelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: CLEAR_SELECTION_TEXT
};
ControlledSelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string
};
export default ControlledSelectionStatus;
//# sourceMappingURL=ControlledSelectionStatus.js.map