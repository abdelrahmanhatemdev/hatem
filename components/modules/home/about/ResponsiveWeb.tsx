"use client";
import { memo, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
const ResponsiveWeb = () => {
  const responsiveWebRef = useRef(null);
  const responsiveWebIsInView = useInView(responsiveWebRef, {
    once: false,
    margin: "0px",
  });

  const responsivePhoneRef = useRef(null);
  const responsivePhoneIsInView = useInView(responsivePhoneRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 200 },
  };
  return (
    <div className="bg-neutral-900 rounded-3xl border border-neutral-800 pt-16 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Responsive Web</h2>
      <div className="px-8 flex gap-8">
        <div className="w-[22rem] h-[20rem] h  relative overflow-hidden">
          <div ref={responsiveWebRef}>
            <AnimatePresence>
              {responsiveWebIsInView && (
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
                      src="/assets/images/about/responsive-web.webp"
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
        <div className="w-[8rem] h-[20rem] h relative overflow-hidden">
        <div ref={responsivePhoneRef}>
            <AnimatePresence>
              {responsivePhoneIsInView && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={animationVariants}
                >
                  <motion.div
                    initial={{ y: "0%" }}
                    animate={{ y: "-77%" }}
                    transition={{
                      duration: 8, 
                      repeat: 1,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="absolute w-full h-auto"
                  >
                    <Image
                      src="/assets/images/about/responsive-phone.webp"
                      alt="Responsive Phone"
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
export default memo(ResponsiveWeb);
