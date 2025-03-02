import { fadeScaleD2 } from "@/lib/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const PixelPerfect = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeScaleD2}
      layout
    >
      <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border pt-10 border-neutral-800 h-full flex flex-col gap-10 justify-center overflow-hidden">
        <div className="flex flex-col gap-4 items-start px-8">
          <h3 className="text-xl font-semibold ">Pixel-Perfect Development</h3>
          <p className="text-sm font-semibold text-neutral-500 line-clamp-3">
            I transform your Figma, Sketch, or Adobe XD designs into
            production-ready code, aligning elements to ensure a flawless
            implementation.
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
        <div className="h-[16rem] md:h-[19rem] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl  -ml-6 md:-ml-4 -mb-24 md:mb-24 lg:-ml-10 max-w-[19rem] md:max-w-[35rem] lg:max-w-[19rem] border border-neutral-800"
          >
            <source src="/assets/media/about/pixel-perfect.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.div>
  );
};
export default memo(PixelPerfect);
