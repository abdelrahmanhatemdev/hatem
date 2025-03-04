"use client"
import Image from "next/image";
import { memo } from "react";
import {motion} from "framer-motion"
import { fade, fadeD1, fadeD2, fadeD3, fadeD4, fadeDu1, fadeDu2, fadeDu3, fadeScale, fadeScaleD1, fadeScaleD4, fadeScaleD5 } from "@/lib/animation";

const DashboardMobile = () => {
  return (
    <section className="py-10 md:py-32 px-3 md:px-6 w-full">
      <div className="flex justify-between flex-wrap gap-20 md:px-6 lg:px-28 w-full">
        <div className="flex flex-col gap-10 w-[600px] ">
          <h2 className="font-ogg text-4xl md:text-6xl">
            <motion.p variants={fadeD1} initial="hidden" whileInView="visible">Manage with Ease</motion.p>
            <motion.p variants={fadeD2} initial="hidden" whileInView="visible">Anytime</motion.p>
            <motion.p variants={fadeD3} initial="hidden" whileInView="visible">Anywhere</motion.p>
          </h2>
          <motion.p variants={fadeD4} initial="hidden" whileInView="visible" className="text-lg font-medium text-neutral-400">
            I built a responsive, user-friendly dashboard that adapts seamlessly
            to any device, ensuring a smooth experience. Its structured layout
            helps users stay focused, making key insights and actions easily
            accessible.
          </motion.p>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <motion.div variants={fadeScaleD4} initial="hidden" whileInView="visible" className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center">
              <h3 className="text-xl font-semibold">Real-Time Updates</h3>
              <p className="font-semibold text-neutral-400">
                Instantly reflects changes and new data, keeping users informed
                without manual refreshes.
              </p>
            </motion.div>
            <motion.div variants={fadeScaleD5} initial="hidden" whileInView="visible"  className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center">
              <h3 className="text-xl font-semibold">Intelligent Navigation</h3>
              <p className="font-semibold text-neutral-400">
                A well-structured menu and shortcuts allow users to access key
                sections effortlessly.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 grow lg:min-w-[600px]">
          <motion.div variants={fadeDu2} initial="hidden" whileInView="visible"  className="flex items-center">
            <Image
              src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
              alt="Next.js Development"
              className="rounded-[2vw] border border-neutral-800"
              width={306}
              height={600}
            />
          </motion.div>
          <div className="flex flex-col gap-10">
            <motion.div variants={fadeDu1} initial="hidden" whileInView="visible" >
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
                alt="Next.js Development"
                className="rounded-[2vw] border border-neutral-800"
                width={306}
                height={600}
              />
            </motion.div>
            <motion.div variants={fadeDu3} initial="hidden" whileInView="visible" >
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
                alt="Next.js Development"
                className="rounded-[2vw] border border-neutral-800"
                width={306}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(DashboardMobile);
