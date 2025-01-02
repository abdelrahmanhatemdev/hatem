import { AnimatePresence, useInView, motion } from "framer-motion";
import Link from "next/link";
import { memo, useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const SPA = () => {
  const boxRef = useRef(null);
  const boxIsInView = useInView(boxRef, {
    once: false,
    margin: "0px",
  });

  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };
  return (
    <div ref={boxRef} className="h-full">
 
          <motion.div
            initial="hidden"
            whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} variants={animationVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border pt-10 border-neutral-800 h-full flex flex-col gap-10 justify-center overflow-hidden">
              <div className="flex flex-col gap-4 items-start px-8">
                <h3 className="text-xl font-semibold ">
                  Single Page Application (SPA)
                </h3>
                <p className="text-sm font-semibold text-neutral-500 line-clamp-3">
                  
I build dynamic, fast-loading SPAs from the ground up, tailored to provide seamless user experience .
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
                  className="rounded-2xl -mb-24 -ml-10 max-w-96 border border-neutral-800"
                >
                  <source src="/assets/media/about/spa.mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>

      </div>
  );
};
export default memo(SPA);
