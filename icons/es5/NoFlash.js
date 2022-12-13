function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgNoFlash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M2.45 2.45L1.04 3.87l5.3 5.3-.2.23H2V22h16v-1.17l2.13 2.13 1.41-1.41L2.45 2.45zM10 20c-2.21 0-4-1.79-4-4 0-1.95 1.4-3.57 3.25-3.92l1.57 1.57c-.26-.09-.53-.15-.82-.15a2.5 2.5 0 000 5 2.5 2.5 0 002.5-2.5c0-.29-.06-.56-.15-.82l1.57 1.57A3.993 3.993 0 0110 20zm8-4.83L10.83 8h1.75l1.28 1.4H18v5.77zm2.4-9.57H22L19 11V7h-1V2h4l-1.6 3.6z"
  }));
}

export default SvgNoFlash;