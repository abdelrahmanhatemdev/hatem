import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const MobileFirst = () => {
  const animationVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
    hidden: { opacity: 0, scale: 0.8 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animationVariants}
    >
      <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border pt-10 border-neutral-800 h-full flex flex-col gap-10 justify-center overflow-hidden relative">
        <div className="flex flex-col gap-4 items-start px-8">
          <h3 className="text-xl font-semibold ">Mobile-First Design</h3>
          <p className="text-sm font-semibold text-neutral-500 line-clamp-3">
            I prioritize mobile-first development, ensuring your web
            applications look and perform great on any device, from smartphones
            to desktops.
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

        <div className="h-[16rem] md:h-[19rem] overflow-hidden flex gap-10 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="max-w-[50%] border border-neutral-800 rounded-tr-2xl -ml-2"
          >
            <source src="/assets/media/about/mobile-first.mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute start-[calc(43%+1.5rem)] md:start-[calc(25%+.5rem)] lg:start-[calc(43%+.5rem)] max-w-[45%] md:max-w-[65%] lg:max-w-[45%] h-auto border border-neutral-800 rounded-t-2xl overflow-hidden">
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: "-77%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              layout
              className="w-full h-auto"
            >
              <Image
                src="/assets/media/about/responsive-phone.webp"
                alt="Responsive Phone"
                width={1366}
                height={3024}
                priority={true}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default memo(MobileFirst);
