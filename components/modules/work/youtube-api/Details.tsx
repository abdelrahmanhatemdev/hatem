import { memo } from "react";
import {
  fade,
  fadeD2,
  fadeD5,
} from "@/lib/animation";

import { details, stack } from "@/data/works/youtubeAPI";

import dynamic from "next/dynamic";
import { animate } from "@/lib/animation/animate";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));
const StackList = dynamic(() => import("@/components/custom/StackList"));


const fillVerticalFade = animate({
  type: "fillVerticalFade",
  duration: 1.5,
  yFrom: 0,
  yTo: "100%",
});

const Details = () => {
  return (
    <section className="px-3 md:px-6">
      <Animate
        variants={fade}
        element="h1"
        className="py-8 lg:py-[2vw] text-[12vw] md:text-[9vw] font-black font-satoshi"
      >
        Youtube API
      </Animate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-0">
        <div className="flex gap-5 lg:gap-20">
          <Animate
            variants={fadeD2}
            className="flex flex-col gap-2 lg:gap-[1vw]"
          >
            {details.map((item, i) => {
              const valueClass =
                "text-xs lg:text-[1.5vw] tracking-widest font-medium";
              return (
                <div className="flex flex-col *:leading-6" key={i}>
                  <h2 className="text-neutral-400 font-semibold md:text-[1vw]">
                    {item.title}
                  </h2>
                  {item?.href ? (
                    <a
                      target="_blank"
                      href={`${item.href}`}
                      className={valueClass}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={valueClass}>{item.value}</p>
                  )}
                </div>
              );
            })}
          </Animate>
            <div className="h-fit grid grid-cols-[3px_calc(100%-3px)]">
                      <Animate
                        variants={fillVerticalFade}
                        className="w-[1px] h-full bg-white "
                      ></Animate>
          
                      <div className="px-2 text-neutral-500 font-semibold text-xs md:text-[1vw] pb-5">
                        <StackList stack={stack} />
                      </div>
                    </div>
        </div>
        <Animate
          variants={fadeD5}
          className="text-base md:text-[1.7vw] font-medium text-neutral-200"
        >
          I built YouTube UI clone to capture the essence of YouTube with a
          bold, creative design powered by the YouTube Data API. It features a
          fully responsive layout, real-time search, an embedded video player,
          dark mode, watch history, and an interactive Shorts section. Every
          interaction is smooth and fast, delivering a blazing-fast, app-like
          experience optimized for both performance and delight.
        </Animate>
      </div>
    </section>
  );
};
export default memo(Details);
