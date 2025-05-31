import { memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { infiniteVertical1 } from "@/lib/animation";

const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Performance = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 pt-10 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Performance</h2>
      <div className="px-8 flex gap-8">
        <div className="w-[96%] h-[43vw] md:h-[20rem]  relative overflow-hidden">
          <Animate
            variants={infiniteVertical1}
            className="absolute w-full h-auto"
          >
            <Image
              src="/assets/media/about/performance.webp"
              alt="Performance"
              width={1366}
              height={3024}
              loading="lazy"
              className="rounded-2xl"
            />
          </Animate>
        </div>
      </div>
    </div>
  );
};
export default memo(Performance);
