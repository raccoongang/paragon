import * as React from "react";

function SvgBedroomChild(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M9 8.5h6v2H9zM7.51 12h9v2h-9z" />
      <path d="M22 2H2v20h20V2zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18V17z" />
    </svg>
  );
}

export default SvgBedroomChild;
