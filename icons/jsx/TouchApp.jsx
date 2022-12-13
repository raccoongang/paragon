import * as React from "react";

function SvgTouchApp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M8.25 9.24V5.5a2.5 2.5 0 015 0v3.74c1.21-.81 2-2.18 2-3.74 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.56.79 2.93 2 3.74zm5.08 2.26h-1.08v-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.74l-4.04-.85L4 16.62 9.38 22h8.67l1.07-7.62-5.79-2.88z" />
    </svg>
  );
}

export default SvgTouchApp;
