import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarFilters from './SidebarFilters';
import DataTableContext from './DataTableContext';

var DataTableLayout = function DataTableLayout(_ref) {
  var filtersTitle = _ref.filtersTitle,
      className = _ref.className,
      children = _ref.children;

  var _useContext = useContext(DataTableContext),
      setFilter = _useContext.setFilter,
      showFiltersInSidebar = _useContext.showFiltersInSidebar;

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-layout-wrapper', className)
  }, showFiltersInSidebar && setFilter && /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-layout-sidebar"
  }, /*#__PURE__*/React.createElement(SidebarFilters, {
    title: filtersTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-layout-main"
  }, children));
};

DataTableLayout.defaultProps = {
  className: null,
  filtersTitle: 'Filters'
};
DataTableLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  filtersTitle: PropTypes.string
};
export default DataTableLayout;
//# sourceMappingURL=DataTableLayout.js.map