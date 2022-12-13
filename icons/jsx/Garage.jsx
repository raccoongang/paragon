import * as React from "react";

function SvgGarage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx={15} cy={13} r={1} />
      <circle cx={9} cy={13} r={1} />
      <path d="M8.33 7.5l-.66 2h8.66l-.66-2z" />
      <path d="M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z" />
    </svg>
  );
}

export default SvgGarage;
