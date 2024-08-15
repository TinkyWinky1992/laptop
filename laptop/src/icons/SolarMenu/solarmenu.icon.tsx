import React from "react";
import "./solarmenu.style.css";

export const SolarMenu: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="SolarMenu"
      viewBox="0 0 48 49"
      fill="none"
    >
      <g filter="url(#filter0_d_1_307)">
        <path
          d="M10 28.5C10.7911 28.5 11.5645 28.2654 12.2223 27.8259C12.8801 27.3864 13.3928 26.7616 13.6955 26.0307C13.9983 25.2998 14.0775 24.4956 13.9231 23.7196C13.7688 22.9437 13.3878 22.231 12.8284 21.6716C12.269 21.1122 11.5563 20.7312 10.7804 20.5769C10.0044 20.4225 9.20017 20.5017 8.46927 20.8045C7.73836 21.1072 7.11365 21.6199 6.67412 22.2777C6.2346 22.9355 6 23.7089 6 24.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M24 28.5C26.2091 28.5 28 26.7091 28 24.5C28 22.2909 26.2091 20.5 24 20.5C21.7909 20.5 20 22.2909 20 24.5C20 26.7091 21.7909 28.5 24 28.5Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M42 24.5C42 25.2911 41.7654 26.0645 41.3259 26.7223C40.8864 27.3801 40.2616 27.8928 39.5307 28.1955C38.7998 28.4983 37.9956 28.5775 37.2196 28.4231C36.4437 28.2688 35.731 27.8878 35.1716 27.3284C34.6122 26.769 34.2312 26.0563 34.0769 25.2804C33.9225 24.5044 34.0017 23.7002 34.3045 22.9693C34.6072 22.2384 35.1199 21.6136 35.7777 21.1741C36.4355 20.7346 37.2089 20.5 38 20.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_307"
          x="1.25"
          y="16.75"
          width="45.5"
          height="17.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_307"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_307"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
