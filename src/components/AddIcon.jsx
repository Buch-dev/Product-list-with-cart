import * as React from "react";

const AddIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    onClick={onClick}
  >
    <g id="Add to Cart - Add Icon" fill="#fff">
      <path
        id="Vector"
        d="M10 2.5c4.125 0 7.5 3.375 7.5 7.5s-3.375 7.5-7.5 7.5-7.5-3.375-7.5-7.5S5.875 2.5 10 2.5m0-1.25c-4.812 0-8.75 3.938-8.75 8.75 0 4.813 3.938 8.75 8.75 8.75 4.813 0 8.75-3.937 8.75-8.75 0-4.812-3.937-8.75-8.75-8.75"
      ></path>
      <path
        id="Vector_2"
        d="M15 9.375h-4.375V5h-1.25v4.375H5v1.25h4.375V15h1.25v-4.375H15z"
      ></path>
    </g>
  </svg>
);

export default AddIcon;
