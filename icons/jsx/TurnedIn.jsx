import * as React from "react";

function SvgTurnedIn(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M19 3H5v18l7-3 7 3V3z" />
    </svg>
  );
}

export default SvgTurnedIn;
