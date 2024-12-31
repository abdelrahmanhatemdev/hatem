"use client";
import { memo, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
const Performance = () => {
  const performanceRef = useRef(null);
  const performanceIsInView = useInView(performanceRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: .3 } },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <div className="bg-neutral-900 rounded-3xl border border-neutral-800 pt-16 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Performance</h2>
      <div className="px-8 flex gap-8">
        <div className="w-[32rem] h-[20rem] h  relative overflow-hidden">
          <div ref={performanceRef}>
            <AnimatePresence>
              {performanceIsInView && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={animationVariants}
                >
                  <motion.div
                    initial={{ y: "0%" }}
                    animate={{ y: "-59%" }}
                    transition={{
                      duration: 8, 
                      repeat: 1,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="absolute w-full h-auto"
                  >
                    <Image
                      src="/assets/images/about/performance.webp"
                      alt="Responsive Web"
                      width={1366}
                      height={3024}
                      priority={true}
                      className="rounded-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Performance);
