import LazyAnimation from "@/components/custom/animation/LazyAnimation";
import {
  fadeScale,
  fadeScaleD1,
  fadeScaleD2,
  fadeScaleD3,
  fadeScaleD4,
} from "@/lib/animation";
import { motion } from "framer-motion";
import { memo } from "react";

const Performance = () => {
  return (
    <div className="grid md:grid-cols-[calc(60%-1.25rem)_calc(40%-1.25rem)] gap-10">
      <div className="h-full">
        <LazyAnimation>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeScale}
            layout
            className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-6 lg:p-16 border-neutral-800 h-full flex flex-col gap-4 justify-center"
          >
            <h2 className="text-lg md:text-3xl font-semibold">
              Crafting Code with Precision and Purpose
            </h2>
            <div>
              <span className="lg:text-xl text-neutral-400 leading-6 font-normal">
                I am passionate and dedicated for creating high-performing,
                seamless web applications. With expertise in building scalable
                and efficient frontend solutions, I specialize in turning
                complex ideas into functional, user-friendly experiences.
              </span>
              <span className="md:text-xl text-neutral-400 leading-6 font-normal">
                With a commitment to excellence and adaptability, I aim to
                deliver results that not only meet but exceed
                expectations—empowering businesses to thrive in the digital
                landscape.
              </span>
            </div>
          </motion.div>
        </LazyAnimation>
      </div>
      <div className="grid grid-cols-2 lg:gap-8 gap-5">
        <LazyAnimation>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeScaleD1}
            layout
            className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] aspect-square md:aspect-auto rounded-3xl border border-neutral-800 md:p-10 flex flex-col gap-2 items-center justify-center"
          >
            <h3 className="text-3xl md:text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
              <span className="text-2xl">+</span>
              <span>5</span>
            </h3>
            <p className="font-semibold md:tracking-wider text-center px-6">
              Years of Experience
            </p>
          </motion.div>
        </LazyAnimation>

        <LazyAnimation>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeScaleD2}
            layout
            className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] aspect-square md:aspect-auto rounded-3xl border border-neutral-800 md:p-10 flex flex-col gap-2 items-center justify-center"
          >
            <h3 className="text-3xl md:text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
              <span className="text-2xl">+</span>
              <span>30</span>
            </h3>
            <p className="font-semibold md:tracking-wider text-center px-6">
              Stunning Projects
            </p>
          </motion.div>
        </LazyAnimation>

        <LazyAnimation>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeScaleD3}
            layout
            className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] aspect-square md:aspect-auto rounded-3xl border border-neutral-800 md:p-10 flex flex-col gap-2 items-center justify-center"
          >
            {" "}
            <h3 className="text-3xl md:text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
              <span className="text-2xl">+</span>
              <span>20</span>
            </h3>
            <p className="font-semibold md:tracking-wider text-center px-6">
              Clients
            </p>
          </motion.div>
        </LazyAnimation>

        <LazyAnimation>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeScaleD4}
            layout
            className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] aspect-square md:aspect-auto rounded-3xl border border-neutral-800 md:p-10 flex flex-col gap-2 items-center justify-center"
          >
            {" "}
            <h3 className="text-3xl md:text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
              <span>100</span>
              <span className="text-3xl">%</span>
            </h3>
            <p className="font-semibold md:tracking-wider text-center px-6">
              Quality
            </p>
          </motion.div>
        </LazyAnimation>
      </div>
    </div>
  );
};
export default memo(Performance);
