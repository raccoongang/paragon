import * as React from "react";

function SvgRoomService(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M2 17h20v2H2v-2zm11.84-9.21A2.006 2.006 0 0012 5a2.006 2.006 0 00-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
    </svg>
  );
}

export default SvgRoomService;
