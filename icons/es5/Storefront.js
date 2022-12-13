function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgStorefront(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M21.9 8.89L20.49 3H3.51L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V21h18v-8.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zM7.02 5l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.26-.33-.35-.76-.25-1.17L5.09 5h1.93zm11.89 0l1.05 4.36c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5h1.93zm-3.4 4.52c.05.39-.07.78-.33 1.07-.23.26-.55.41-.96.41-.67 0-1.22-.59-1.22-1.31V5h1.96l.55 4.52zM11 9.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41a1.42 1.42 0 01-.33-1.07L9.04 5H11v4.69zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"
  }));
}

export default SvgStorefront;