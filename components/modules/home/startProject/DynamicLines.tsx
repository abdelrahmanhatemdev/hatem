import { memo } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Path = dynamic(
  () => import("@/components/modules/home/startProject/Path"),
  {
    loading: Loading,
  }
);

const DynamicLines = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[50vh] sm:h-[30vh] lg:h-[80svh]" 
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path />
      <Path y={25} />
      <Path y={-25} direction="vertical"/>
    </svg>
  );
};

export default memo(DynamicLines);
