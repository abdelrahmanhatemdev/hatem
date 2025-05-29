import { memo } from "react";
import { basic, stack, homeImages } from "@/data/works/vogueAdmin";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/components//modules/home/works/Work"));

const VogueAdmin = () => {
  return (
    <Work basic={basic} stack={stack} images={homeImages}/>
  );
};
export default memo(VogueAdmin);
