import * as React from "react";

function SvgCameraswitch(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14 6h-4L9 7H6v10h12V7h-3l-1-1zm-2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      <path d="M8.57.51l4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51zm2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48v2.95z" />
    </svg>
  );
}

export default SvgCameraswitch;
