import React from "react";
import "./minimize.style.css";

export const MinimizeIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="minimizeIcon"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2.66669 8C2.66669 7.73478 2.77204 7.48043 2.95958 7.29289C3.14712 7.10536 3.40147 7 3.66669 7H12.3334C12.5986 7 12.8529 7.10536 13.0405 7.29289C13.228 7.48043 13.3334 7.73478 13.3334 8C13.3334 8.26522 13.228 8.51957 13.0405 8.70711C12.8529 8.89464 12.5986 9 12.3334 9H3.66669C3.40147 9 3.14712 8.89464 2.95958 8.70711C2.77204 8.51957 2.66669 8.26522 2.66669 8Z"
        fill="white"
        fill-opacity="0.6"
      />
    </svg>
  );
};
