import * as React from "react";

function SvgInventory2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M2 2v6.7h1V22h18V8.7h1V2H2zm13 12H9v-2h6v2zm5-7H4V4h16v3z" />
    </svg>
  );
}

export default SvgInventory2;
