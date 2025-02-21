"use client";
import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
    hidden: { opacity: 0, y: 200 },
  };
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 pt-10 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Responsive Web</h2>
      <div className="px-8 flex gap-4 md:gap-6">
        <div className="w-[68%] md:w-[67%] h-[43vw] md:h-[20rem] relative overflow-hidden">
          <div ref={responsiveWebRef}>
            {responsiveWebIsInView && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
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
                    src="/assets/media/about/responsive-web.webp"
                    alt="Responsive Web"
                    width={1366}
                    height={3024}
                    priority={true}
                    className="rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="w-[25%] md:w-[25%] h-[43vw] md:h-[20rem] relative overflow-hidden">
          <div ref={responsivePhoneRef}>
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
                    src="/assets/media/about/responsive-phone.webp"
                    alt="Responsive Phone"
                    width={1366}
                    height={3024}
                    priority={true}
                    className="rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(ResponsiveWeb);
