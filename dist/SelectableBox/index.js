function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectableBoxSet from './SelectableBoxSet';
import { useCheckboxSetContext } from '../Form/FormCheckboxSetContext';
import { useRadioSetContext } from '../Form/FormRadioSetContext';
import { getInputType } from './utils';
var INPUT_TYPES = ['radio', 'checkbox'];
var SelectableBox = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      value = _ref.value,
      checked = _ref.checked,
      children = _ref.children,
      isIndeterminate = _ref.isIndeterminate,
      isInvalid = _ref.isInvalid,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      inputHidden = _ref.inputHidden,
      className = _ref.className;
  var inputType = getInputType('SelectableBox', type);

  var isChecked = function isChecked() {
    var _useCheckboxSetContex;

    switch (type) {
      case 'radio':
        return useRadioSetContext().value === value;

      case 'checkbox':
        return (_useCheckboxSetContex = useCheckboxSetContext().value) === null || _useCheckboxSetContex === void 0 ? void 0 : _useCheckboxSetContex.includes(value);

      default:
        return useRadioSetContext().value === value;
    }
  };

  var inputRef = useRef(null);
  var input = /*#__PURE__*/React.createElement(inputType, _objectSpread({
    value: value,
    checked: checked,
    hidden: inputHidden,
    ref: inputRef,
    tabIndex: -1,
    onChange: function onChange() {}
  }, type === 'checkbox' && {
    isIndeterminate: isIndeterminate
  }), null);

  var onClickHandler = function onClickHandler() {
    inputRef.current.click();

    if (onClick) {
      onClick(inputRef.current);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    onKeyPress: onClickHandler,
    onClick: onClickHandler,
    onFocus: onFocus,
    className: classNames('pgn__selectable_box', className, {
      'pgn__selectable_box-active': isChecked() || checked,
      'pgn__selectable_box-invalid': isInvalid
    }),
    tabIndex: 0,
    ref: ref
  }, input, children);
});
SelectableBox.propTypes = {
  /** Content of the `SelectableBox`. */
  children: PropTypes.node.isRequired,

  /** A value that is passed to the input tag. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Controls whether `SelectableBox` is checked. */
  checked: PropTypes.bool,

  /** Indicates the input type: checkbox or radio. */
  type: PropTypes.oneOf(INPUT_TYPES),

  /** Function that is called when the `SelectableBox` is clicked. */
  onClick: PropTypes.func,

  /** Function that is called when the `SelectableBox` is focused. */
  onFocus: PropTypes.func,

  /** Controls display of the input (checkbox or radio button) on the `SelectableBox`. */
  inputHidden: PropTypes.bool,

  /** Indicates a state for the 'checkbox' `type` when `SelectableBox` is neither checked nor unchecked. */
  isIndeterminate: PropTypes.bool,

  /** Adds errors styles to the `SelectableBox`. */
  isInvalid: PropTypes.bool,

  /** A class that is appended to the base element. */
  className: PropTypes.string
};
SelectableBox.defaultProps = {
  value: undefined,
  checked: false,
  type: 'radio',
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  inputHidden: true,
  isIndeterminate: false,
  isInvalid: false,
  className: undefined
};
SelectableBox.Set = SelectableBoxSet;
export default SelectableBox;
//# sourceMappingURL=index.js.map