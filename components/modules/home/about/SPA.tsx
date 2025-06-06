import Link from "next/link";
import { memo } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import dynamic from "next/dynamic";
import { fadeScale } from "@/lib/animation";

const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const SPA = () => {
  return (
    <Animate variants={fadeScale}>
      <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border pt-10 border-neutral-800 h-full flex flex-col gap-10 justify-center overflow-hidden">
        <div className="flex flex-col gap-4 items-start px-8">
          <h3 className="text-xl font-semibold ">
            Single Page Application (SPA)
          </h3>
          <p className="text-sm font-semibold text-neutral-500 line-clamp-3">
            I build dynamic, fast-loading SPAs from the ground up, tailored to
            provide seamless user experience .
          </p>
          <Link
            href="#works"
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
        <div className="h-[16rem] md:h-[20rem] lg:h-[19rem]  overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl -ml-6 lg:-mb-24 lg:-ml-10 max-w-[19rem] md:max-w-[50rem]  lg:max-w-96 border border-neutral-800"
          >
            <source src="/assets/media/about/spa.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Animate>
  );
};
export default memo(SPA);
