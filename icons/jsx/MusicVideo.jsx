import * as React from "react";

function SvgMusicVideo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M23 3H1v18h22V3zm-2 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03A3.003 3.003 0 0111 18c-1.66 0-3-1.34-3-3z" />
    </svg>
  );
}

export default SvgMusicVideo;
