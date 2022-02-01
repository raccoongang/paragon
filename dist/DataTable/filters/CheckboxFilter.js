import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Badge } from '../..';
import { newId } from '../../utils';
import LabelledCheckbox from './LabelledCheckbox';

function CheckboxFilter(_ref) {
  var _ref$column = _ref.column,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      Header = _ref$column.Header,
      filterChoices = _ref$column.filterChoices,
      getHeaderProps = _ref$column.getHeaderProps;
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  var ariaLabel = useRef(newId("checkbox-filter-label-".concat(getHeaderProps().key, "-")));
  var checkedBoxes = filterValue || [];

  var changeCheckbox = function changeCheckbox(value) {
    if (checkedBoxes.includes(value)) {
      var newCheckedBoxes = checkedBoxes.filter(function (val) {
        return val !== value;
      });
      return setFilter(newCheckedBoxes);
    }

    checkedBoxes.push(value);
    return setFilter(checkedBoxes);
  };

  var headerBasedId = useMemo(function () {
    return "checkbox-filter-check-".concat(getHeaderProps().key, "-");
  }, [getHeaderProps]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    role: "group",
    "aria-labelledby": ariaLabel.current
  }, /*#__PURE__*/React.createElement(FormLabel, {
    id: ariaLabel.current,
    className: "pgn__checkbox-filter-label"
  }, Header), filterChoices.map(function (_ref2) {
    var name = _ref2.name,
        number = _ref2.number,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement(LabelledCheckbox, {
      id: headerBasedId,
      key: headerBasedId + name,
      checked: checkedBoxes.includes(value),
      onChange: function onChange() {
        changeCheckbox(value);
      },
      label: /*#__PURE__*/React.createElement(React.Fragment, null, name, " ", number !== undefined && /*#__PURE__*/React.createElement(Badge, {
        variant: "light"
      }, number))
    });
  }));
}

CheckboxFilter.propTypes = {
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `filterChoices`: Specifies array of choices.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.number
    })).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.arrayOf(PropTypes.any)
  }).isRequired
};
export default CheckboxFilter;
//# sourceMappingURL=CheckboxFilter.js.map