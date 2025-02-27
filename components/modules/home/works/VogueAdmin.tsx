"use client";
import { memo } from "react";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const VogueAdmin = () => {
  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const boxTwoVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.3 },
    },
  };
  const boxThreeVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.4 },
    },
  };
  const boxFourVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.3 },
    },
  };
  const boxFiveVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.5 },
    },
  };
  const boxSixVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.7 },
    },
  };

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-[calc(100%-48vw)_48vw] gap-5 lg:gap-0 ">
      <div className="flex flex-col justify-between order-2 lg:order-1">
        <div className="flex flex-col gap-24 order-2 lg:order-1">
          <div className="grid-cols-1 lg:grid-cols-[60%_40%] hidden lg:grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={animationVariants}
              layout
            >
              <Link href={`/work/vogue-admin`}>
                <h2 className="uppercase text-6xl font-bold">Vogue</h2>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={boxTwoVariants}
              layout
            >
              <div className="text-sm flex flex-col justify-end gap-2">
                <span className="text-neutral-600 font-extrabold">Role</span>
                <p className="text-neutral-400">Frontend / backend</p>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] mt-20 lg:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={boxThreeVariants}
              layout
            >
              <div className="flex flex-col justify-start gap-2">
                <span className="text-neutral-600 font-bold lg:font-extrabold text-lg lg:text-sm">
                  Description
                </span>
                <p className="text-neutral-400 md:max-w-96 lg:max-w-64 text-base lg:text-sm">
                  Vogue Admin is a modern e-commerce dashboard built with
                  cutting-edge tech, offering seamless platform management with
                  essential admin modules.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={boxFourVariants}
              layout
            >
              <div className="text-sm hidden lg:flex flex-col justify-start gap-2 ">
                <span className="text-neutral-600 font-extrabold">Stack</span>
                <div className="text-neutral-400">
                  <p>Nextjs</p>
                  <p>React</p>
                  <p>Typescript</p>
                  <p>Tailwind</p>
                  <p>Shadcn</p>
                  <p>Zustand</p>
                  <p>React form hook</p>
                  <p>Zod</p>
                  <p>Tanstack</p>
                  <p>Framer Motion</p>
                  <p>Swiper</p>
                  <p>Recharts</p>
                  <p>Firebase</p>
                  <p>Redis</p>
                  <p>ESLint</p>
                  <p>Vercel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%] order-1 lg:order-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxFiveVariants}
            layout
          >
            <div className="text-sm flex flex-col justify-start gap-2">
              <p className="text-neutral-400 max-w-64">Dashboard</p>
            </div>
          </motion.div>
          <div className="text-sm flex flex-col justify-start gap-2 items-end lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={boxSixVariants}
              layout
            >
              <div className="text-neutral-400">
                <p>&copy; 2025</p>
              </div>
            </motion.div>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxTwoVariants}
            className="absolute inset-0"
            layout
          >
            <Image
              src="/assets/media/work/vogue-admin/dashboard-light.webp"
              alt="Next.js Development"
              className="rounded-md border border-neutral-800 w-[97%]  group-hover:opacity-0 transition-all duration-700"
              width={800}
              height={495}
              priority={true}
            />
            <Image
              src="/assets/media/work/vogue-admin/dashboard.webp"
              alt="Next.js Development"
              className="rounded-md border border-neutral-800 w-[97%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
              width={800}
              height={495}
              priority={true}
            />
          </motion.div>
  
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxThreeVariants}
            className="absolute -right-2 bottom-0"
            layout
          >
            <Image
              src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
              alt="Next.js Development"
              className="rounded-lg border border-neutral-200 w-[20vw] lg:w-[9vw] lg:right-0 group-hover:opacity-0 transition-all duration-700"
              width={153}
              height={300}
              priority={true}
            />
            <Image
              src="/assets/media/work/vogue-admin/dashboard-sm.webp"
              alt="Next.js Development"
              className="rounded-lg border border-neutral-800 w-[20vw] lg:w-[9vw] absolute -right-2 lg:right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
              width={153}
              height={300}
              priority={true}
            />
          </motion.div>
        </div>
      </Link>
    </div>
  );
};
export default memo(VogueAdmin);
