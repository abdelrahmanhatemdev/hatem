import { AnimatePresence, useInView, motion } from "framer-motion";
import Link from "next/link";
import { memo, useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const PixelPerfect = () => {
  const boxRef = useRef(null);
  const boxIsInView = useInView(boxRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: .6 } },
    hidden: { opacity: 0, scale: 0.8 },
  };
  return (
    <div ref={boxRef} className="h-full">
      <AnimatePresence>
        {boxIsInView && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animationVariants}
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border pt-10 border-neutral-800 h-full flex flex-col gap-10 justify-center overflow-hidden">
              <div className="flex flex-col gap-4 items-start px-8">
                <h3 className="text-xl font-semibold ">
                  Pixel-Perfect Development
                </h3>
                <p className="text-sm font-semibold text-neutral-500 line-clamp-3">
                I transform your Figma, Sketch, or Adobe XD designs into production-ready code, aligning elements to ensure a flawless implementation.
                </p>
                <Link
                  href="/projects"
                  className="group bg-neutral-900 border border-neutral-700 rounded-full py-1 px-4 flex gap-1 items-center hover:bg-neutral-950 hover:border-neutral-800 transition-all duration-300 ease-in-out"
                >
                  <span className="text-sm font-semibold">Projects</span>
                  <div className="w-6">
                    <HiArrowLongRight
                      size={25}
                      className="group-hover:ml-1 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </Link>
              </div>
              <div className="h-[19rem] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-2xl  -ml-3 max-w-[22rem] border border-neutral-800"
                >
                  <source src="/assets/media/about/pixel-perfect.mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default memo(PixelPerfect);
