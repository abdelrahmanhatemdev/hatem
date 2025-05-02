"use client";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { fadeDu1D3, fadeScaleD1 } from "@/lib/animation";

const DarkCaption = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex flex-col gap-16 justify-center items-center">
        <div>
          <motion.div
            variants={fadeDu1D3}
            initial="hidden"
            whileInView="visible"
            className="w-full h-full"
          >
            <Image
              src="/assets/media/work/youtube-api/home.webp"
              alt="Dashboard"
              className="rounded-xl border-[10px] border-neutral-950/50 max-w-full md:max-w-[50vw] h-auto"
              width={1017}
              height={617}
              loading="lazy"
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeScaleD1}
          initial="hidden"
          whileInView="visible"
          className="text-lg md:text-2xl max-w-[600px] text-center font-satoshi text-neutral-500"
        >
          Designed with comfort in mind, the dark theme offers a
          <strong className="font-semibold text-white">
            visually relaxing experiencefor night browsing
          </strong>{" "}
          and users who prefer a sleek, modern aesthetic.
        </motion.p>
      </div>
    </section>
  );
};
export default memo(DarkCaption);
