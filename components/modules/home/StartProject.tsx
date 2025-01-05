"use client";
import { memo } from "react";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const DottedLine = dynamic(
  () => import("@/components/modules/home/startProject/DottedLine"),
  {
    loading: Loading,
  }
);

const StartProject = () => {
  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <section className="w-full mt-32 px-10 relative">
      {/* border border-dashed border-neutral-800 */}
      <div className="2xl:w-full mx-auto relative h-[80svh] rounded-[5rem]">
        <div className="absolute inset-0 w-full h-full">
        <DottedLine/>

        </div>
        <div className="w-full h-full flex flex-col gap-16 items-center py-10">
          <h2 className="text-6xl bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent font-extrabold leading-[5rem]">
            Turn Your Vision Into a Stunning Reality!
          </h2>
          <p className="text-lg text-neutral-500 text-center max-w-[800px] font-semibold">
            I provide the
            <strong className="font-extrabold text-neutral-50">
              {" "}
              high-quality{" "}
            </strong>
            tools and expertise to bring your vision to life. Let’s create a web
            experience that
            <strong className="font-extrabold text-neutral-50">
              {" "}
              stands out{" "}
            </strong>
            ,
            <strong className="font-extrabold text-neutral-50">
              {" "}
              captivates your audience{" "}
            </strong>
            and
            <strong className="font-extrabold text-neutral-50">
              {" "}
              push your success to new heights!
            </strong>
          </p>
          <button className="bg-neutral-950 py-4 px-8 text-2xl font-extrabold rounded-full cursor-pointer hover:bg-neutral-900 text-white transition-colors shadow-lg border border-neutral-900">
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
};
export default memo(StartProject);
