import React, { useContext, useMemo } from 'react';
import DataTableContext from './DataTableContext';
import FilterStatus from './FilterStatus';

var SidebarFilters = function SidebarFilters() {
  var _useContext = useContext(DataTableContext),
      state = _useContext.state,
      columns = _useContext.columns;

  var availableFilters = useMemo(function () {
    return columns.filter(function (column) {
      return column.canFilter;
    });
  }, [columns]);
  var filtersApplied = (state === null || state === void 0 ? void 0 : state.filters) && state.filters.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-side-filters"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pgn__data-table-side-filters-title"
  }, "Filters"), /*#__PURE__*/React.createElement("hr", null), availableFilters.map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.Header,
      className: "pgn__data-table-side-filters-item"
    }, column.render('Filter'));
  }), filtersApplied && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterStatus, {
    className: "pgn__data-table-side-filters-status",
    showFilteredFields: false,
    variant: "tertiary"
  })));
};

export default SidebarFilters;
//# sourceMappingURL=SidebarFilters.js.map