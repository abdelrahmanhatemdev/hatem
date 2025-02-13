"use client";
import { memo } from "react";

import { motion } from "framer-motion";

import Image from "next/image";

const SelectedWorks = () => {
  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const boxTwoVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section className="w-full mt-32 px-10">
      <div className="mx-auto flex flex-col gap-10">
        <h2 className="md:text-6xl  text-center p-4">Selected Works</h2>
        <div className="grid grid-cols-1 gap-32 py-32">
          <div className="grid md:grid-cols-1 lg:grid-cols-[calc(100%-820px)_820px] gap-5 lg:gap-0 ">
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
                <h2 className="uppercase text-6xl font-bold">Vogue</h2>
                <div className="text-sm flex flex-col justify-end gap-2">
                  <span className="text-neutral-600 font-extrabold">Role</span>
                  <p className="text-neutral-400">Frontend / backend</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
               
                <div className="text-sm flex flex-col justify-end gap-2">
                  <span className="text-neutral-600 font-extrabold">Description</span>
                  <p className="text-neutral-400">Frontend / backend</p>
                </div>
                <div className="text-sm flex flex-col justify-end gap-2">
                  <span className="text-neutral-600 font-extrabold">Role</span>
                  <p className="text-neutral-400">Frontend / backend</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end h-[500px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={animationVariants}
                layout
                className="absolute inset-0"
              >
                <Image
                  src="/assets/media/works/vogue-admin/dashboard-light.png"
                  alt="Next.js Development"
                  className="rounded-lg border border-neutral-800"
                  width={800}
                  height={495}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={boxTwoVariants}
                layout
                className="absolute right-0 -bottom-32"
              >
                <Image
                  src="/assets/media/works/vogue-admin/dashboard-sm-light.png"
                  alt="Next.js Development"
                  className="rounded-lg border border-neutral-200"
                  width={153}
                  height={300}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(SelectedWorks);
