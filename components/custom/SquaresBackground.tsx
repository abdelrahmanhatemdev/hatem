import { memo } from "react";

const SquaresBackground = () => {
  const spacing = 20;
  const count = 100;

  const lines = [];

  // Horizontal lines
  for (let i = 0; i <= count; i++) {
    lines.push(
      <line key={`h-${i}`} x1="0" x2="100%" y1={i * spacing} y2={i * spacing} />
    );
  }

  // Vertical lines
  for (let i = 0; i <= count; i++) {
    lines.push(
      <line key={`v-${i}`} y1="0" y2="100%" x1={i * spacing} x2={i * spacing} />
    );
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full -z-1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g
        opacity="0.08"
        stroke="white"
        strokeDasharray="1 1"
      >
        {lines}
      </g>
    </svg>
  );
};

export default memo(SquaresBackground);
