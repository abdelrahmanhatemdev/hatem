"use client"
import Image from "next/image";
import { memo } from "react";
import {motion} from "framer-motion"
import { fade, fadeD1, fadeDu1, fadeDu1D1, fadeDu1D3, fadeDu2, fadeDu3 } from "@/lib/animation";

const Dark = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className=" bg-neutral-950/50 pt-10 md:pt-32 overflow-hidden ">
        <div className="flex flex-col gap-32 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 max-w-[900px]">
            <motion.div variants={fadeDu1} initial="hidden" whileInView="visible" className="px-3 md:px-5">
              <Image
                src="/assets/media/work/vogue-admin/dark-1.webp"
                alt="Dashboard Phone"
                className="rounded-2xl border-[5px] border-neutral-950/50"
                width={545}
                height={1031}
              />
            </motion.div>
            <motion.div variants={fadeDu2} initial="hidden" whileInView="visible" className="px-3 md:px-5 md:pt-16">
              <Image
                src="/assets/media/work/vogue-admin/dark-2.webp"
                alt="Dashboard Phone"
                className="rounded-2xl border-[5px] border-neutral-950/50"
                width={545}
                height={1031}
              />
            </motion.div>
            <motion.div variants={fadeDu3} initial="hidden" whileInView="visible" className="px-3 md:px-5 md:pt-32">
              <Image
                src="/assets/media/work/vogue-admin/dark-3.webp"
                alt="Dashboard Phone"
                className="rounded-2xl border-[5px] border-neutral-950/50"
                width={545}
                height={1031}
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 sticky top-0 px-6 lg:px-32 w-full">
            <h2 className="font-ogg text-4xl md:text-6xl">
              <motion.p variants={fade} initial="hidden" whileInView="visible" className="laeding-10 md:leading-20">Breathtaking Experience</motion.p>
              <motion.p variants={fadeD1} initial="hidden" whileInView="visible" className="laeding-10 md:leading-20"> In Light and Dark</motion.p>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] gap-5">
              <motion.p variants={fadeDu1D1} initial="hidden" whileInView="visible" className="text-lg font-medium text-neutral-400">
                Dark mode improves visual comfort by minimizing glare and
                reducing eye fatigue, making extended screen use easier on the
                eyes. It adapts to different lighting conditions, ensuring a
                smooth and comfortable experience, especially in dim
                environments.
              </motion.p>
              <motion.p variants={fadeDu1D3} initial="hidden" whileInView="visible" className="text-lg font-medium text-neutral-400 md:px-5">
                Beyond aesthetics, dark mode boosts battery life on OLED and
                AMOLED screens by using less power, allowing for longer device
                usage.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div variants={fadeDu2} initial="hidden" whileInView="visible" className="font-ogg text-[40vw] h-[36vw] flex justify-center">Dark</motion.div>
      </div>
    </section>
  );
};
export default memo(Dark);
