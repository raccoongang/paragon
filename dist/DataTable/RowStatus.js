import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';

var RowStatus = function RowStatus(_ref) {
  var className = _ref.className,
      statusText = _ref.statusText;

  var _useContext = useContext(DataTableContext),
      page = _useContext.page,
      rows = _useContext.rows,
      itemCount = _useContext.itemCount;

  var pageSize = (page === null || page === void 0 ? void 0 : page.length) || (rows === null || rows === void 0 ? void 0 : rows.length);

  if (!pageSize) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.RowStatus.statusText",
    defaultMessage: statusText,
    description: "A text describing how many rows is shown in the table",
    values: {
      itemCount: itemCount,
      pageSize: pageSize
    }
  }));
};

RowStatus.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** A text describing how many rows is shown in the table.  */
  statusText: PropTypes.string
};
RowStatus.defaultProps = {
  className: undefined,
  statusText: 'Showing {pageSize} of {itemCount}'
};
export default RowStatus;
//# sourceMappingURL=RowStatus.js.map