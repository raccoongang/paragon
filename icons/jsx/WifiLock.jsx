import * as React from "react";

function SvgWifiLock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M21.98 11L24 8.98A16.88 16.88 0 0012 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71h2.93z" />
      <path d="M22 15.11c0-1-.68-1.92-1.66-2.08-.12-.02-.24-.02-.36-.02h-.01c-1.09.02-1.97.9-1.97 1.99v1h-1v5h6v-5h-1v-.89zM21 16h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" />
    </svg>
  );
}

export default SvgWifiLock;
