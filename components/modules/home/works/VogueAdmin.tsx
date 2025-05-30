import { memo } from "react";
import { basic, stack, homeImages } from "@/data/works/vogueAdmin";
import dynamic from "next/dynamic";

const HomeWork = dynamic(() => import("@/components/modules/home/works/HomeWork"));

const VogueAdmin = () => {
  return (
    <HomeWork basic={basic} stack={stack} images={homeImages}/>
  );
};
export default memo(VogueAdmin);
