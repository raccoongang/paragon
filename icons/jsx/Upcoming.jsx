import * as React from "react";

function SvgUpcoming(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M21.16 7.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zm-4.6 7.81L7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55zM22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20v-9z" />
    </svg>
  );
}

export default SvgUpcoming;
