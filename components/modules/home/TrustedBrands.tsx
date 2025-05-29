"use client";
import LazyAnimation from "@/components/custom/animation/LazyAnimation";
import { fadeScale } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const brands = [
  "roasting-house",
  "camel-step",
  "ccit",
  "fg-sports",
  "menu-app",
  "ajlan",
  "mystation",
  "al-zowayed",
  "bullet",
  "wow",
  "asasiat",
  "codecube",
  "coming",
  "crossedlink",
];

const TrustedBrands = () => {
  return (
    <LazyAnimation>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeScale}
        layout
      >
        <div className="pt-32 h-full flex flex-col gap-10 justify-center items-center">
          <h3 className="text-4xl text-center p-4">
            Trusted By Innovative Brands
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 ">
            {brands.map((brand, i) => (
              <LazyAnimation key={`${i}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    ...fadeScale,
                    visible: {
                      ...fadeScale.visible,
                      transition: {
                        ...fadeScale.visible.transition,
                        delay: 0.05 * (i + 1),
                      },
                    },
                  }}
                >
                  <div className="group cursor-pointer p-2 bg-neutral-950 rounded-3xl border border-neutral-800 shadow-[0_0_20px_rgba(80,80,80,0.2)]">
                    <Image
                      src={`/assets/media/brands/${brand}.webp`}
                      alt={`${brand.replaceAll("-", " ")}`}
                      width={180}
                      height={180}
                      className="size-28"
                    />
                  </div>
                </motion.div>
              </LazyAnimation>
            ))}
          </div>
        </div>
      </motion.div>
    </LazyAnimation>
  );
};
export default memo(TrustedBrands);
