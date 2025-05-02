"use client"
import Image from "next/image";
import { memo } from "react";
import {motion} from "framer-motion"
import { fadeD1, fadeD2, fadeDu1, fadeDu1D2, fadeDu1D3 } from "@/lib/animation";

const BigScreen = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-20 xl:gap-0 px-3 pt-10 md:p-28 div bg-neutral-950/50">
        <div className="flex flex-col items-center xl:items-start gap-10 order-2 xl:order-1 ">
          <motion.div variants={fadeDu1} initial="hidden" whileInView="visible" className="max-w-[750px]">
            <Image
              src="/assets/media/work/youtube-api/big-screen-1.webp"
              alt="Big Screen 1"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 max-w-full md:max-w-[90%] h-auto "
              width={1017}
              height={617}
               loading="lazy"
            />
          </motion.div>
          <motion.div variants={fadeDu1} initial="hidden" whileInView="visible" className="max-w-[750px]">
            <Image
              src="/assets/media/work/youtube-api/big-screen-2.webp"
              alt="Big Screen 2"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 max-w-full md:max-w-[90%] h-auto "
              width={1017}
              height={617}
               loading="lazy"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-10 order-1 xl:order-2">
          <h2 className="font-ogg text-4xl md:text-[4rem]">
            <motion.p variants={fadeD1} initial="hidden" whileInView="visible">Built for Efficiency</motion.p>
            <motion.p variants={fadeD2} initial="hidden" whileInView="visible">Made for You</motion.p>
          </h2>
          <motion.p variants={fadeDu1D2} initial="hidden" whileInView="visible" className="text-lg md:text-[2vw] lg:text-[1.1vw] font-medium text-neutral-400">
            I designed it to simplify e-commerce management, making
            tasks faster and more intuitive. With a clean interface and smart
            features, it helps businesses stay organized and efficient. Every
            element is built for productivity, giving users seamless control
            over their store with minimal effort.
          </motion.p>
          <motion.p variants={fadeDu1D3} initial="hidden" whileInView="visible" className="text-lg md:text-[2vw] lg:text-[1.1vw] font-medium text-neutral-400">I focused on creating a smooth, hassle-free experience where every action feels natural and efficient. From managing products to tracking key metrics, Vogue Admin ensures users can navigate effortlessly and make informed decisions without distractions.</motion.p>
         
        </div>
      </div>
    </section>
  );
};
export default memo(BigScreen);
