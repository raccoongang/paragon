import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
import FilterStatus from './FilterStatus';

var SidebarFilters = function SidebarFilters(_ref) {
  var title = _ref.title;

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
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.SidebarFilters.title",
    defaultMessage: title,
    description: "Title of the filters components"
  })), /*#__PURE__*/React.createElement("hr", null), availableFilters.map(function (column) {
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

SidebarFilters.propTypes = {
  title: PropTypes.string.isRequired
};
export default SidebarFilters;
//# sourceMappingURL=SidebarFilters.js.map