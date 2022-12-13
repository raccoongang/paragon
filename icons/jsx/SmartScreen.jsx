import * as React from "react";

function SvgSmartScreen(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M1 5v14h22V5H1zm17 12H6V7h12v10z" />
      <path d="M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z" />
    </svg>
  );
}

export default SvgSmartScreen;
