function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgBattery50(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.3,
    d: "M17 4h-3V2h-4v2H7v9h10V4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7 13v9h10v-9H7z"
  }));
}

export default SvgBattery50;