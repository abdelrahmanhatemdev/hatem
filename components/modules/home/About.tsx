"use client";
import { memo, useRef } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import { AnimatePresence, useInView, motion } from "framer-motion";

const Description = dynamic(
  () => import("@/components/modules/home/about/Description"),
  {
    loading: Loading,
  }
);

const ResponsiveWeb = dynamic(
  () => import("@/components/modules/home/about/ResponsiveWeb"),
  {
    loading: Loading,
  }
);

const Performance = dynamic(
  () => import("@/components/modules/home/about/Performance"),
  {
    loading: Loading,
  }
);

const SPA = dynamic(
  () => import("@/components/modules/home/about/SPA"),
  {
    loading: Loading,
  }
);

const MobileFirst = dynamic(
  () => import("@/components/modules/home/about/MobileFirst"),
  {
    loading: Loading,
  }
);

const About = () => {
  const responsiveRef = useRef(null);
  const responsiveIsInView = useInView(responsiveRef, {
    once: false,
    margin: "0px",
  });
  

  const performanceRef = useRef(null);
  const performanceIsInView = useInView(performanceRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const animationDelayedVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: .4 },
    },
  };

  return (
    <section className="w-full mt-24">
      <div className="w-[1225px] mx-auto flex flex-col gap-10">
        <Description />
        <div className="grid grid-cols-[calc(50%-1.25rem)_calc(50%-1.25rem)] gap-10">
          <div ref={responsiveRef}>
            <AnimatePresence>
              {responsiveIsInView && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={animationVariants}
                >
                  <ResponsiveWeb />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div ref={performanceRef}>
            <AnimatePresence>
              {performanceIsInView && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={animationDelayedVariants}
                >
                  <Performance />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(3,calc(33.33333%-0.8333333rem))] gap-10 ">
          <SPA/>
          <MobileFirst/>
          <div>Implementing REST APIs</div>
        </div>
      </div>
    </section>
  );
};
export default memo(About);
