import React, { useContext } from 'react';
import { ButtonGroup, IconButton, Icon } from '..';
import { ArrowBackIos, ArrowForwardIos } from '../../icons';
import DataTableContext from './DataTableContext';

var TablePaginationButtonGroup = function TablePaginationButtonGroup() {
  var _useContext = useContext(DataTableContext),
      nextPage = _useContext.nextPage,
      previousPage = _useContext.previousPage,
      canPreviousPage = _useContext.canPreviousPage,
      canNextPage = _useContext.canNextPage; // Use nextPage as a proxy for whether or not the table is paginated


  if (!nextPage) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(IconButton, {
    alt: "Previous page",
    src: ArrowBackIos,
    iconAs: Icon,
    onClick: previousPage,
    disabled: !canPreviousPage
  }), /*#__PURE__*/React.createElement(IconButton, {
    alt: "Next page",
    src: ArrowForwardIos,
    iconAs: Icon,
    onClick: nextPage,
    disabled: !canNextPage
  }));
};

export default TablePaginationButtonGroup;
//# sourceMappingURL=TablePaginationButtonGroup.js.map