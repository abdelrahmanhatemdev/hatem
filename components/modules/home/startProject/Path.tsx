import { memo } from "react";

const Path = ({
  direction = "horizontal",
  length = 98,
  x,
  y,
}: {
  direction?: "horizontal" | "vertical";
  length?: number;
  x?: number;
  y?: number;
}) => {
  const randomStrokeDasharray = Array.from({ length: 200 }, () => 0.5)
    .map((dash) => dash.toFixed(1))
    .join(" ");

  const startX = x ? x : (100 - length) / 2;
  const startY = y ? y : (100 - length) / 2;

  const pathData = `M ${startX} ${startY} ${
    direction === "horizontal" ? `H ${startX + length}` : `V ${startY + length}`
  }`;

  return (
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
  );
};

export default memo(Path);
