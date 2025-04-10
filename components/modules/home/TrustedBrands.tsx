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
              <LazyAnimation>
                <motion.div
                  key={`${i}`}
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
                  <div className="group cursor-pointer p-4 bg-neutral-900 rounded-3xl border border-neutral-800  transition-colors duration-500 ease-in-out">
                    <Image
                      src={`/assets/media/brands/${brand}.webp`}
                      alt={`${brand.replaceAll("-", " ")}`}
                      width={180}
                      height={180}
                      priority={true}
                      className="transition duration-500 ease-in-out
                       brightness-0 contrast-200 invert
                       group-hover:brightness-100 group-hover:contrast-100 group-hover:invert-0
                       "
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
