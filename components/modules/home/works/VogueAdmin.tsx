"use client";
import { memo } from "react";

import { easeInOut, motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { stack } from "@/components/modules/work/vogue-admin/Details";
import {
  fadeScale,
  fadeScaleD1,
  fadeScaleD2,
  fadeScaleD3,
  fadeScaleD4,
  fadeScaleD5,
} from "@/lib/animation";
import LazyAnimation from "@/components/custom/animation/LazyAnimation";

const VogueAdmin = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-[calc(100%-48vw)_48vw] gap-5 lg:gap-0 ">
      <div className="flex flex-col justify-between order-2 lg:order-1">
        <div className="flex flex-col gap-24 order-2 lg:order-1">
          <div className="grid-cols-1 lg:grid-cols-[60%_40%] hidden lg:grid">
            <LazyAnimation>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScale}
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <Link href={`/work/vogue-admin`}>
                  <h2 className="uppercase text-6xl font-bold">Vogue</h2>
                </Link>
              </motion.div>
            </LazyAnimation>

            <LazyAnimation>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScaleD1}
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <div className="text-sm flex flex-col justify-end gap-2">
                  <span className="text-neutral-600 font-extrabold">Role</span>
                  <p className="text-neutral-400">Frontend / backend</p>
                </div>
              </motion.div>
            </LazyAnimation>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] mt-20 lg:mt-0">
            <LazyAnimation>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScaleD2}
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <div className="flex flex-col justify-start gap-2">
                  <span className="text-neutral-600 font-bold lg:font-extrabold text-lg lg:text-sm">
                    Description
                  </span>
                  <p className="text-neutral-400 md:max-w-96 lg:max-w-72 text-base lg:text-sm">
                    Vogue Admin is a modern e-commerce dashboard built with
                    cutting-edge tech, offering seamless platform management
                    with essential admin modules.
                  </p>
                </div>
              </motion.div>
            </LazyAnimation>

            <LazyAnimation>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScaleD3}
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <div className="text-sm hidden lg:flex flex-col justify-start gap-2 ">
                  <span className="text-neutral-600 font-extrabold">Stack</span>
                  <div className="text-neutral-400">
                    {stack.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: fadeScaleD3.visible.transition.delay + i * 0.1,
                          ease: easeInOut,
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </LazyAnimation>
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%] order-1 lg:order-3">
          <LazyAnimation>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScaleD4}
              viewport={{ once: true, amount: 0.2 }}
              layout
            >
              <div className="text-sm flex flex-col justify-start gap-2">
                <p className="text-neutral-400 max-w-64">Dashboard</p>
              </div>
            </motion.div>
          </LazyAnimation>

          <div className="text-sm flex flex-col justify-start gap-2 items-end lg:items-start">
            <LazyAnimation>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeScaleD5}
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <div className="text-neutral-400">
                  <p>&copy; 2025</p>
                </div>
              </motion.div>
            </LazyAnimation>
          </div>
        </div>
      </div>
      <div className="lg:hidden mb-4">
        <Link href={`/work/vogue-admin`}>
          <h2 className="uppercase text-6xl font-bold">Vogue</h2>
        </Link>
      </div>
      <Link href={`/work/vogue-admin`} className=" order-1 lg:order-2">
        <div className="group relative flex justify-center h-[70vw] lg:h-[35vw]">
          <LazyAnimation>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScaleD1}
              className="absolute inset-0"
              viewport={{ once: true, amount: 0.2 }}
              layout
            >
              <Image
                src="/assets/media/work/vogue-admin/dashboard-light.webp"
                alt="Dashboard Light"
                className="rounded-md border border-neutral-800 w-[97%] group-hover:scale-95 transition-all duration-700"
                width={800}
                height={495}
              />
            </motion.div>
          </LazyAnimation>

          <LazyAnimation>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScaleD3}
              className="absolute -right-2 bottom-0"
              viewport={{ once: true, amount: 0.2 }}
              layout
            >
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm.webp"
                alt="Dashboard Phone"
                className="rounded-lg border border-neutral-200 w-[20vw] lg:w-[9vw] lg:right-0 group-hover:scale-80 transition-all duration-700"
                width={153}
                height={300}
                loading="lazy"
              />
            </motion.div>
          </LazyAnimation>
        </div>
      </Link>
    </div>
  );
};
export default memo(VogueAdmin);
