import { memo } from "react";
import dynamic from "next/dynamic";
const WorkProcessSwiper = dynamic(
  () => import("@/components/modules/home/workProcess/WorkProcessSwiper")
);

const WorkProcess = () => {
  return (
    <section className="w-full mt-32">
      <div className="2xl:w-[70%] w-[90%] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-6xl text-center p-4">
          My Work Process
        </h2>
        <WorkProcessSwiper />
      </div>
    </section>
  );
};
export default memo(WorkProcess);
