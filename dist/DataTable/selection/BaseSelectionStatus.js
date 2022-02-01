import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Button } from '../..';
import DataTableContext from '../DataTableContext';
import { SELECT_ALL_TEST_ID, CLEAR_SELECTION_TEST_ID } from './data/constants';

var BaseSelectionStatus = function BaseSelectionStatus(_ref) {
  var className = _ref.className,
      clearSelectionText = _ref.clearSelectionText,
      numSelectedRows = _ref.numSelectedRows,
      onSelectAll = _ref.onSelectAll,
      onClear = _ref.onClear,
      selectAllText = _ref.selectAllText,
      allSelectedText = _ref.allSelectedText,
      selectedText = _ref.selectedText,
      intl = _ref.intl;

  var _useContext = useContext(DataTableContext),
      itemCount = _useContext.itemCount;

  var isAllRowsSelected = numSelectedRows === itemCount;
  var intlAllSelectedText = intl.formatMessage({
    id: 'pgn.DataTable.BaseSelectionStatus.allSelectedText',
    defaultMessage: allSelectedText,
    description: 'Text for all selected label',
    values: {
      itemCount: itemCount
    }
  });
  var intlSelectedText = intl.formatMessage({
    id: 'pgn.DataTable.BaseSelectionStatus.selectedText',
    defaultMessage: selectedText,
    description: 'Text for selected label',
    values: {
      itemCount: itemCount
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("span", null, isAllRowsSelected ? intlAllSelectedText : intlSelectedText), !isAllRowsSelected && /*#__PURE__*/React.createElement(Button, {
    className: SELECT_ALL_TEST_ID,
    variant: "link",
    size: "inline",
    onClick: onSelectAll
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.clearSelectionText",
    defaultMessage: selectAllText,
    description: "Clear selection button label",
    values: {
      itemCount: itemCount
    }
  })), numSelectedRows > 0 && /*#__PURE__*/React.createElement(Button, {
    className: CLEAR_SELECTION_TEST_ID,
    variant: "link",
    size: "inline",
    onClick: onClear
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.clearSelectionText",
    defaultMessage: clearSelectionText,
    description: "Clear selection button label"
  })));
};

BaseSelectionStatus.defaultProps = {
  className: undefined,
  selectAllText: 'Select all {itemCount}',
  allSelectedText: 'All {itemCount} selected',
  selectedText: '{itemCount} selected'
};
BaseSelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string.isRequired,
  numSelectedRows: PropTypes.number.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  selectAllText: PropTypes.string,
  allSelectedText: PropTypes.string,
  selectedText: PropTypes.string,
  intl: PropTypes.shape.isRequired
};
export default injectIntl(BaseSelectionStatus);
//# sourceMappingURL=BaseSelectionStatus.js.map