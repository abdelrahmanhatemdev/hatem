"use client";
import { memo } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const ThreeQuarterCircle = dynamic(
  () => import("@/components/modules/home/startProject/ThreeQuarterCircle"),
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
    <section className="w-full mt-64 px-10 relative">
      <div className="w-[98%] xs:w-[calc(95%-80px)] md:w-[65vw] mx-auto h-full relative pt-4 z-10">
        <div
          className="w-full h-16 grid lg:grid-cols-3 absolute left-0 -top-12 border border-dashed 
          border-[#191919] border-y-0"
        >
          <div className="w-full h-6 bg-gradient-to-b from-black to-transparent absolute inset-0 z-10"></div>
          <div></div>
          <div className="hidden lg:block h-full border border-dashed border-[#191919] border-y-0"></div>
        </div>
        <div
          className="w-full h-24 grid lg:grid-cols-3 absolute left-0 -bottom-24 border border-dashed 
          border-[#191919] border-y-0"
        >
          <div></div>
          <div className="hidden lg:block h-full border border-dashed border-[#191919] border-y-0"></div>
        </div>
        <div className="hidden lg:block h-full w-16 bg-gradient-to-r from-black to-transparent absolute top-0 -left-16 z-10"></div>
        <div className="hidden lg:block h-full w-16 bg-gradient-to-l from-black to-transparent absolute top-0 -right-16 z-10"></div>
        {/* <div className="h-16 w-16 absolute -top-4 -left-8 -z-10 border border-dashed border-[#191919] rounded-full"></div> */}
        <ThreeQuarterCircle
          size={80}
          strokeColor="#262626"
          strokeWidth={1}
          dashLength={4}
          gapLength={2}
          className="w-20 h-20 absolute -top-6 -left-10 z-10 hidden xs:block"
        />
        <h2
          className="text-3xl lg:text-[3.2vw] bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent font-extrabold lg:leading-[5rem] leading-10
          border border-dashed border-[#191919] 
            p-5 w-full text-center relative z-20
          "
        >
          Turn Your Vision Into a Stunning Reality!
          <div
            className="w-16 h-[calc(100%+2px)] absolute -top-[1px] -left-16 border border-dashed 
          border-[#191919] border-x-0"
          ></div>
          <div
            className="w-16 h-[calc(100%+2px)] absolute -top-[1px] -right-16 border border-dashed 
          border-[#191919] border-x-0"
          ></div>
        </h2>
        <div
          className="border border-dashed border-[#191919] border-t-0
           w-full text-center flex items-start justify-center p-10 relative"
        >
          <p className="lg:text-lg text-neutral-500 text-center max-w-[800px] lg:font-semibold sm:leading-7 lg:leading-10">
            I provide the
            <strong className="font-bold text-neutral-50">
              {" "}
              high-quality{" "}
            </strong>
            tools and expertise to bring your vision to life. Let’s create a web
            experience that
            <strong className="font-bold text-neutral-50"> stands out </strong>,
            <strong className="font-bold text-neutral-50">
              {" "}
              captivates your audience{" "}
            </strong>
            and
            <strong className="font-bold text-neutral-50">
              {" "}
              push your success to new heights!
            </strong>
          </p>
          <div
            className="w-16 h-[calc(100%+2px)] absolute -top-[1px] -left-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
          ></div>
          <div
            className="w-16 h-[calc(100%+2px)] absolute -top-[1px] -right-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
          ></div>
        </div>
        <div
          className="w-full grid lg:grid-cols-3 border border-dashed 
          border-[#191919] border-t-0 relative"
        >
          <div
            className="w-16 h-[calc(100%+2px)] absolute -top-[1px] -left-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
          ></div>
          <div
            className="w-16 h-[calc(100%+2px)] absolute -top-[1px] -right-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
          ></div>
          <div></div>
          <div className="h-full lg:border border-dashed border-[#191919] border-y-0 flex items-center justify-center p-12 relative">
            <button className="bg-neutral-950 py-4 px-6 lg:px-[1.2vw] xl:px-[2vw] text-xl lg:text-[1.5vw] xl:text-[1.7vw] font-bold rounded-full cursor-pointer hover:bg-neutral-900 text-white transition-colors shadow-lg border border-neutral-900">
              Start Project
            </button>
            <ThreeQuarterCircle
              size={80}
              strokeColor="#262626"
              strokeWidth={1}
              dashLength={4}
              gapLength={2}
              className="w-20 h-20 absolute -bottom-10 -right-10 z-10 hidden xs:block"
              gapCorner="lt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(StartProject);
