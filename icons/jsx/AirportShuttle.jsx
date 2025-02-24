import * as React from "react";

function SvgAirportShuttle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M17 5H1v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zM3 11V7h4v4H3zm3 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM13 11H9V7h4v4zm5 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM15 11V7h1l4 4h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAirportShuttle;
