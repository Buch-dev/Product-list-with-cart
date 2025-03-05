import * as React from "react";

const CarbonTreeIcon = ({
  width = 21,
  height = 20,
  fill = "#1EA575",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 21 20"
    {...props}
  >
    <g id="carbon:tree" fill={fill}>
      <path
        id="Vector"
        d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.26 1.26 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75"
      ></path>
      <path
        id="Vector_2"
        d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.5 2.5 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.76 3.76 0 0 0-3.4 2.179l-.194.417-.54-.072A2 2 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.02 5.02 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.85 3.85 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875z"
      ></path>
    </g>
  </svg>
);

export default CarbonTreeIcon;
