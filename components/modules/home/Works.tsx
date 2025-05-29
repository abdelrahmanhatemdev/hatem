import { memo } from "react";
import dynamic from "next/dynamic";

const VogeAdmin = dynamic(
  () => import("@/components/modules/home/works/VogueAdmin")
);

const YoutubeAPI = dynamic(
  () => import("@/components/modules/home/works/YoutubeAPI")
);

const SelectedWorks = () => {
  return (
    <section className="w-full mt-32" id="works">
      <div className="w-[90%] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl text-center p-4">Selected Works</h2>
        <div className="grid grid-cols-1 gap-8 lg:gap-32 py-8 lg:py-32">
          <VogeAdmin />
          <YoutubeAPI />
        </div>
      </div>
    </section>
  );
};
export default memo(SelectedWorks);
