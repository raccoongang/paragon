import React, { useMemo } from 'react';
import { CheckboxControl } from '../../Form';
import useConvertIndeterminateProp from './useConvertIndeterminateProp';
export var selectColumn = {
  id: 'selection',
  // The header can use the table's getToggleAllPageRowsSelectedProps or getToggleAllRowsSelectedProps
  // method to render a checkbox. The method is determined based on whether pagination is enabled or
  // not (i.e., ``page`` is defined).
  // Proptypes disabled as these props are passed in separately

  /* eslint-disable-next-line react/prop-types */
  Header: function Header(_ref) {
    var getToggleAllPageRowsSelectedProps = _ref.getToggleAllPageRowsSelectedProps,
        getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps,
        page = _ref.page;
    var toggleRowsSelectedProps = useMemo(function () {
      // determine if this selection is for an individual page or the entire table
      var getToggleRowsSelectedProps = page ? getToggleAllPageRowsSelectedProps : getToggleAllRowsSelectedProps;
      return getToggleRowsSelectedProps();
    }, [getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page]);
    var updatedProps = useConvertIndeterminateProp(toggleRowsSelectedProps);
    return /*#__PURE__*/React.createElement("div", {
      className: "d-flex align-content-center p-1"
    }, /*#__PURE__*/React.createElement(CheckboxControl, updatedProps));
  },
  // The cell can use the individual row's getToggleRowSelectedProps method
  // to the render a checkbox
  // Proptypes disabled as this prop is passed in separately

  /* eslint-disable react/prop-types */
  Cell: function Cell(_ref2) {
    var row = _ref2.row;
    var toggleRowSelectedProps = useMemo(function () {
      return row.getToggleRowSelectedProps();
    }, [row.getToggleRowSelectedProps]);
    var updatedProps = useConvertIndeterminateProp(toggleRowSelectedProps);
    return /*#__PURE__*/React.createElement("div", {
      className: "d-flex align-content-center p-1"
    }, /*#__PURE__*/React.createElement(CheckboxControl, updatedProps));
  },

  /* eslint-enable react/prop-types */
  disableSortBy: true
};

var getVisibleColumns = function getVisibleColumns(isSelectable, visibleColumns) {
  var additionalColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var manualSelectColumn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : selectColumn;
  var columns = [];

  if (isSelectable) {
    columns.push(manualSelectColumn);
  }

  columns = columns.concat(visibleColumns);

  if (additionalColumns.length > 0) {
    columns = columns.concat(additionalColumns);
  }

  return columns;
};

export default getVisibleColumns;
//# sourceMappingURL=getVisibleColumns.js.map