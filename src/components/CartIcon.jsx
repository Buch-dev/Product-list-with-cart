import * as React from "react";

const CartIcon = ({ width = 21, height = 20, fill = "#C73B0F", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 21 20"
        {...props}
    >
        <g fill={fill} clipPath="url(#clip0_71_289)">
            <path d="M6.917 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15.667 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M3.78 1.753a.625.625 0 0 0-.613-.503h-2.5V2.5h1.987l2.4 11.998a.625.625 0 0 0 .613.502h11.25v-1.25H6.179l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.418-6.385h-1.28L16.415 10H5.43z"></path>
            <path d="M11.917 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75z"></path>
        </g>
        <defs>
            <clipPath id="clip0_71_289">
                <path fill="#fff" d="M.667 0h20v20h-20z"></path>
            </clipPath>
        </defs>
    </svg>
);

export default CartIcon;