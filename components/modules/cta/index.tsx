"use client";
import { motion } from "framer-motion";
import { memo } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import {
  fade,
  fadeScaleD1,
  fadeScaleD2,
  fadeScaleD3,
  fadeScaleD4,
} from "@/lib/animation";

const ThreeQuarterCircle = dynamic(
  () => import("@/components/modules/cta/ThreeQuarterCircle"),
  {
    loading: Loading,
  }
);

const CTA = () => {
  return (
    <section className="w-full pt-40 px-8 relative" id="contact">
      <motion.div initial="hidden" whileInView="visible" variants={fade}>
        <div className="xs:w-[calc(95%-80px)] md:w-[78%] mx-auto h-full relative pt-4 z-10">
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
            <div className="w-full h-24 bg-gradient-to-t from-black to-transparent absolute left-0 bottom-0 z-10"></div>
            <div></div>
            <div className="hidden lg:block h-full border border-dashed border-[#191919] border-y-0 bg-neutral-950 bg-opacity-10 hover:bg-opacity-70 transition-colors duration-500"></div>
          </div>
          <div className="hidden lg:block h-full w-16 bg-gradient-to-r from-black to-transparent absolute top-0 -left-8 md:-left-16 z-30"></div>
          <div className="hidden lg:block h-full w-16 bg-gradient-to-l from-black to-transparent absolute top-0 -right-8 md:-right-16 z-30"></div>
          <ThreeQuarterCircle
            size={80}
            strokeColor="#262626"
            strokeWidth={1}
            dashLength={4}
            gapLength={2}
            className="w-20 h-20 absolute -top-6 -left-10 z-10 hidden xs:block"
          />
          <div
            className="
          border border-dashed border-[#191919] 
            p-5 w-full text-center relative z-20
          "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScaleD1}
            >
              <h2 className="text-3xl lg:text-[3.2vw] bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent font-extrabold lg:leading-[5rem] leading-10">
                Turn Your Vision Into a Stunning Reality!
              </h2>
            </motion.div>
            <div
              className="w-8 md:w-16 h-[calc(100%+2px)]  absolute -top-[1px] -left-8 md:-left-16 border border-dashed 
          border-[#191919] border-x-0"
            ></div>
            <div
              className="w-8 md:w-16 h-[calc(100%+2px)] absolute -top-[1px] -right-8 md:-right-16 border border-dashed 
          border-[#191919] border-x-0"
            ></div>
          </div>
          <div
            className="border border-dashed border-[#191919] border-t-0
           w-full text-center flex items-start justify-center p-10 relative"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScaleD2}
            >
              <p className="lg:text-2xl text-neutral-500 text-center max-w-[800px] sm:leading-7 lg:leading-10">
                I provide the
                <strong className="font-bold text-neutral-50">
                  {" "}
                  high-quality{" "}
                </strong>
                tools and expertise to bring your vision to life. Let’s create a
                web experience that
                <strong className="font-bold text-neutral-50">
                  {" "}
                  stands out{" "}
                </strong>
                ,
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
            </motion.div>

            <div
              className="w-8 md:w-16 h-[calc(100%+2px)] absolute -top-[1px] -left-8 md:-left-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
            ></div>
            <div
              className="w-8 md:w-16 h-[calc(100%+2px)] absolute -top-[1px] -right-8 md:-right-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
            ></div>
          </div>
          <div
            className="w-full grid lg:grid-cols-3 border border-dashed 
          border-[#191919] border-t-0 relative"
          >
            <div
              className="w-8 md:w-16 h-[calc(100%+2px)]  absolute -top-[1px] -left-8 md:-left-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
            ></div>
            <div
              className="w-8 md:w-16 h-[calc(100%+2px)]  absolute -top-[1px] -right-8 md:-right-16 border border-dashed 
          border-[#191919] border-x-0 border-t-0"
            ></div>
            <div className="bg-neutral-950 bg-opacity-10 hover:bg-opacity-70 transition-colors duration-500"></div>
            <div className="h-full lg:border border-dashed border-[#191919] border-y-transparent flex items-center justify-center flex-wrap gap-4 py-12 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScaleD3}
                className="min-w-fit"
              >
                <a href="mailto:abdelrahmanhatemdev@gmail.com?subject=Join%20a%20Team&body=Hi,%20I%20would%20like%20you%20to%20join%20our%20team."
                  title="SEND ME AN EMAIL" 
                  className="bg-neutral-50 py-3 px-[5vw] md:px-6 font-medium text-[4vw] sm:text-lg rounded-xl cursor-pointer hover:bg-neutral-300 text-neutral-950 transition-colors shadow-lg border border-neutral-900">
                  Join a Team
                </a>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScaleD4}
                className="min-w-fit"
              >
                <a href="mailto:abdelrahmanhatemdev@gmail.com?subject=Start%20a%20Project&body=Hi,%20I%20would%20like%20to%20start%20a%20project."
                  title="SEND ME AN EMAIL"
                
                className="bg-neutral-950 py-3 px-[5vw] md:px-4 font-medium text-[4vw] sm:text-lg rounded-xl cursor-pointer hover:bg-neutral-900 text-white transition-colors shadow-lg border border-neutral-900">
                  Start a Project
                </a>
              </motion.div>
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
            <div className="bg-neutral-950 bg-opacity-10 hover:bg-opacity-70 transition-colors duration-500"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default memo(CTA);
