function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgLessThanEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 15.5L9.25 10l8.25-5.5-1-1.5L6 10l10.5 7z",
    fillRule: "evenodd",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 20.998H6v-2h12z",
    fill: "currentColor"
  }));
}

export default SvgLessThanEqual;