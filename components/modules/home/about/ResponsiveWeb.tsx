import { memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { infiniteVertical1, infiniteVertical2 } from "@/lib/animation";

const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const ResponsiveWeb = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border border-neutral-800 pt-10 flex flex-col gap-10 justify-between">
      <h2 className="text-3xl font-semibold px-8">Responsive Web</h2>
      <div className="px-8 flex gap-4 md:gap-6">
        <div className="w-[68%] md:w-[67%] h-[43vw] md:h-[20rem] relative overflow-hidden">
          <Animate
            variants={infiniteVertical2}
            className="absolute w-full h-auto"
          >
            <Image
              src="/assets/media/about/responsive-web.webp"
              alt="Responsive Web"
              width={1366}
              height={3024}
              loading="lazy"
              className="rounded-2xl"
            />
          </Animate>
        </div>
        <div className="w-[25%] md:w-[25%] h-[43vw] md:h-[20rem] relative overflow-hidden">
          <Animate
            variants={infiniteVertical1}
            className="absolute w-full h-auto"
          >
            <Image
              src="/assets/media/about/responsive-phone.webp"
              alt="Responsive Phone"
              width={1366}
              height={3024}
              loading="lazy"
              className="rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Animate>
        </div>
      </div>
    </div>
  );
};
export default memo(ResponsiveWeb);
