import { motion } from "framer-motion";
import { memo } from "react";

const Performance = () => {
  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const descriptionVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, duration: 1.2 },
    },
  };

  const boxOneVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition },
    },
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
      transition: { ...animationVariants.visible.transition, delay: 0.5 },
    },
  };

  return (
    <div className="grid md:grid-cols-[calc(60%-1.25rem)_calc(40%-1.25rem)] gap-10">
      <div className="h-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={descriptionVariants}
          layout
          className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-6 lg:p-16 border-neutral-800 h-full flex flex-col gap-4 justify-center"
        >
          <h2 className="text-lg md:text-3xl font-semibold">
            Crafting Code with Precision and Purpose
          </h2>
          <div>
            <span className="lg:text-xl text-neutral-400 leading-6 font-normal">
              I am passionate and dedicated for creating high-performing,
              seamless web applications. With expertise in building scalable and
              efficient frontend solutions, I specialize in turning complex
              ideas into functional, user-friendly experiences.
            </span>
            <span className="md:text-xl text-neutral-400 leading-6 font-normal">
              With a commitment to excellence and adaptability, I aim to deliver
              results that not only meet but exceed expectations—empowering
              businesses to thrive in the digital landscape.
            </span>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 lg:gap-8 gap-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={boxOneVariants}
          layout
          className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
        >
          <h3 className="text-3xl md:text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
            <span className="text-2xl">+</span>
            <span>5</span>
          </h3>
          <p className="font-semibold md:tracking-wider text-center px-6">
            Years of Experience
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={boxTwoVariants}
          layout
          className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
        >
          <h3 className="text-3xl md:text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
            <span className="text-2xl">+</span>
            <span>30</span>
          </h3>
          <p className="font-semibold md:tracking-wider text-center px-6">
            Stunning Projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={boxThreeVariants}
          layout
          className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={boxFourVariants}
          layout
          className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
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
      </div>
    </div>
  );
};
export default memo(Performance);
