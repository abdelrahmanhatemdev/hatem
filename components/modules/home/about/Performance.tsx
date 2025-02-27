"use client";
import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const Performance = () => {
  const performanceRef = useRef(null);
  const performanceIsInView = useInView(performanceRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 pt-10 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Performance</h2>
      <div className="px-8 flex gap-8">
        <div className="w-[96%] h-[43vw] md:h-[20rem]  relative overflow-hidden">
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-59%" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-full h-auto"
          >
            <Image
              src="/assets/media/about/performance.webp"
              alt="Responsive Web"
              width={1366}
              height={3024}
              priority={true}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default memo(Performance);
