import { memo } from "react";

const ThreeQuarterDashedCircle = ({
  size = 64, 
  strokeColor = "#191919", 
  strokeWidth = 1, 
  dashLength = 4, 
  gapLength = 2,
  gapCorner = "rb",
  className = "",

}) => {
  const radius = (size - strokeWidth) / 2; 
  const circumference = 2 * Math.PI * radius; 
  const arcLength = (3 / 4) * circumference; 
  const dashArray = Array.from({ length: 30 }, () => `${dashLength} ${gapLength}`)
  .map((dash) => dash)
  .join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dashArray} ${arcLength}`} // Dashed pattern
        strokeDashoffset={-circumference / 4} // Offset to position the gap
        transform={`rotate(${gapCorner === "lt" ? 180 : 0} ${size / 2} ${size / 2})`} // Rotate to start at the top
      />
    </svg>
  );
};

export default memo(ThreeQuarterDashedCircle);
