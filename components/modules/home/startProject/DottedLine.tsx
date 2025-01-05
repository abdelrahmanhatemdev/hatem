import { memo } from "react";

const DottedLine = ({
  direction = "horizontal",
  width = 98,
  height = 1,
}: {
  direction?: "horizontal" | "vertical";
  width?: number;
  height?: number;
}) => {
  const randomStrokeDasharray = Array.from({ length: 30 }, () => 0.5)
    .map((dash) => dash.toFixed(1))
    .join(" ");

  const x = (100 - width) / 2;
  const y = (100 - height) / 2;


  const pathData =
    direction === "horizontal"
      ? `M ${x} ${y} H ${x + width}` 
      : `M ${x} ${y} V ${y + height}`; 

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid meet" 
    >
      <path
        d={pathData}
        strokeMiterlimit="0"
        fill="none"
        stroke="#262626"
        strokeWidth=".2"
        strokeDasharray={randomStrokeDasharray}
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="10;0"
          dur="10s"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default memo(DottedLine);
