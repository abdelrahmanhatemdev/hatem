import { AnimatePresence, useInView, motion } from "framer-motion";
import { memo, useRef } from "react";

const Performance = () => {
  const descriptionRef = useRef(null);
  const descriptionIsInView = useInView(descriptionRef, {
    once: false,
    margin: "0px",
  });

  const boxOneRef = useRef(null);
  const boxOneIsInView = useInView(boxOneRef, {
    once: false,
    margin: "0px",
  });

  const boxTwoRef = useRef(null);
  const boxTwoIsInView = useInView(boxTwoRef, {
    once: false,
    margin: "0px",
  });

  const boxThreeRef = useRef(null);
  const boxThreeIsInView = useInView(boxThreeRef, {
    once: false,
    margin: "0px",
  });

  const boxFourRef = useRef(null);
  const boxFourIsInView = useInView(boxFourRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const descriptionVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, duration: 1.2  },
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
    <div className="grid grid-cols-[calc(60%-1.25rem)_calc(40%-1.25rem)] gap-10 ">
      <div
        ref={descriptionRef}
        className="h-full"
      >
        <AnimatePresence>
          {descriptionIsInView && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={descriptionVariants}
              className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-16 border-neutral-800 h-full flex flex-col gap-4 justify-center"
            >
              <h2 className="text-3xl font-semibold">
                Crafting Code with Precision and Purpose
              </h2>
              <div>
                <span className="text-xl text-neutral-400 leading-6 font-normal">
                  I am passionate and dedicated for creating high-performing,
                  seamless web applications. With expertise in building scalable
                  and efficient frontend solutions, I specialize in turning
                  complex ideas into functional, user-friendly experiences.
                </span>
                <span className="text-xl text-neutral-400 leading-6 font-normal">
                  With a commitment to excellence and adaptability, I aim to
                  deliver results that not only meet but exceed
                  expectations—empowering businesses to thrive in the digital
                  landscape.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div ref={boxOneRef}>
          <AnimatePresence>
            {boxOneIsInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={boxOneVariants}
                className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
              >
                  <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                    <span className="text-3xl">+</span>
                    <span>5</span>
                  </h3>
                  <p className="font-semibold tracking-wider text-center px-6">
                    Years of Experience
                  </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div ref={boxTwoRef}>
          <AnimatePresence>
            {boxTwoIsInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={boxTwoVariants}
                className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
              >
                <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                  <span className="text-3xl">+</span>
                  <span>30</span>
                </h3>
                <p className="font-semibold tracking-wider text-center px-6">
                  Stunning Projects
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div ref={boxThreeRef}>
          <AnimatePresence>
            {boxThreeIsInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={boxThreeVariants}
                className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
              >
                {" "}
                <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                  <span className="text-3xl">+</span>
                  <span>20</span>
                </h3>
                <p className="font-semibold tracking-wider text-center px-6">
                  Clients
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div ref={boxFourRef}>
          <AnimatePresence>
            {boxFourIsInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={boxFourVariants}
                className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center"
              >
                {" "}
                <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                  <span>100</span>
                  <span className="text-3xl">%</span>
                </h3>
                <p className="font-semibold tracking-wider text-center px-6">
                  Quality
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default memo(Performance);
