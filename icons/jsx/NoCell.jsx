import * as React from "react";

function SvgNoCell(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M21.19 21.19L2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78 1.41-1.42zM7 18V9.83L15.17 18H7zM8.83 6L5 2.17V1h14v15.17l-2-2V6H8.83z" />
    </svg>
  );
}

export default SvgNoCell;
