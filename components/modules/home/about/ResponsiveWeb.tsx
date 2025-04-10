"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LazyAnimation from "@/components/custom/animation/LazyAnimation";
const ResponsiveWeb = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 pt-10 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Responsive Web</h2>
      <div className="px-8 flex gap-4 md:gap-6">
        <div className="w-[68%] md:w-[67%] h-[43vw] md:h-[20rem] relative overflow-hidden">
          <LazyAnimation>
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
                src="/assets/media/about/responsive-web.webp"
                alt="Responsive Web"
                width={1366}
                height={3024}
                priority={true}
                className="rounded-2xl"
              />
            </motion.div>
          </LazyAnimation>
        </div>
        <div className="w-[25%] md:w-[25%] h-[43vw] md:h-[20rem] relative overflow-hidden">
          <LazyAnimation>
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: "-77%" }}
              transition={{
                duration: 8,
                repeat: Infinity,
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
          </LazyAnimation>
        </div>
      </div>
    </div>
  );
};
export default memo(ResponsiveWeb);
