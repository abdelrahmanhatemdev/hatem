import Image from "next/image";
import { memo } from "react";
import { fadeD1, fadeD2, fadeDu1, fadeDu1D2, fadeDu1D3 } from "@/lib/animation";

import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const BigScreen = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-20 xl:gap-0 px-3 pt-10 md:p-28 bg-neutral-950/50">
        <div className="flex flex-col items-center xl:items-start gap-10 order-2 xl:order-1">
          <Animate variants={fadeDu1} className="max-w-[750px]">
            <Image
              src="/assets/media/work/simone/big-screen-1.webp"
              alt="Simone Product Showcase 1"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 max-w-full md:max-w-[90%] h-auto"
              width={1017}
              height={617}
              loading="lazy"
            />
          </Animate>
          <Animate variants={fadeDu1} className="max-w-[750px]">
            <Image
              src="/assets/media/work/simone/big-screen-2.webp"
              alt="Simone Product Showcase 2"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 max-w-full md:max-w-[90%] h-auto"
              width={1017}
              height={617}
              loading="lazy"
            />
          </Animate>
        </div>
        <div className="flex flex-col gap-10 order-1 xl:order-2">
          <h2 className="font-ogg text-4xl md:text-[4rem]">
            <Animate variants={fadeD1} element="p">
              Designed with Purpose
            </Animate>
            <Animate variants={fadeD2} element="p">
              Crafted to Inspire
            </Animate>
          </h2>
          <Animate
            variants={fadeDu1D2}
            element="p"
            className="text-lg md:text-[2vw] lg:text-[1.1vw] font-medium text-neutral-400"
          >
            Simone’s digital presence mirrors its physical philosophy: refined,
            thoughtful, and enduring. Each detail is shaped to elevate the
            experience — evoking a sense of calm, clarity, and quiet luxury.
          </Animate>
          <Animate
            variants={fadeDu1D3}
            element="p"
            className="text-lg md:text-[2vw] lg:text-[1.1vw] font-medium text-neutral-400"
          >
            Whether browsing collections or exploring stories behind the craft,
            the interface invites users to slow down and connect with what
            truly matters — the emotion, the material, the timeless beauty of
            design.
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default memo(BigScreen);
