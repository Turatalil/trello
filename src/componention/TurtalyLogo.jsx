// TurtalyLogo.jsx
import React from "react";

const TurtalyLogo = ({ size = 120 }) => (
  <svg
    width={size}
    height={(size * 0.3)}
    viewBox="0 0 600 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
 
    <rect width="600" height="180" rx="30" fill="#242b36" />

    <rect x="80" y="40" width="50" height="100" rx="10" fill="#ffffff" />


    <rect x="150" y="40" width="50" height="60" rx="10" fill="#ffffff" />

    <text
      x="230"
      y="115"
      fill="white"
      fontSize="64"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      Turtaly
    </text>
  </svg>
);

export default TurtalyLogo;
