"use client";
import Image from "next/image";
import { memo, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import {
  fade,
  fadeD1,
  fadeDu1,
  fadeDu1D1,
  fadeDu1D3,
  fadeDu2,
  fadeDu3,
} from "@/lib/animation";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Dark = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <section ref={containerRef} className="py-10 lg:py-32 px-3 md:px-6">
      <div className=" bg-neutral-950/50 pt-10 md:pt-32 overflow-hidden ">
        <div className="flex flex-col gap-32 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
            <Animate variants={fadeDu1} className="px-3 md:px-5">
              <Image
                src="/assets/media/work/simone/dark-1.webp"
                alt="Dark 1"
                className="rounded-2xl border-[5px] border-neutral-950/50 contrast-[105%] max-w-full md:max-w-[25vw] lg:max-w-[15vw] h-auto"
                width={545}
                height={1031}
                loading="lazy"
              />
            </Animate>
            <Animate variants={fadeDu2} className="px-3 md:px-5 md:pt-16">
              <Image
                src="/assets/media/work/simone/dark-2.webp"
                alt="Dark 2"
                className="rounded-2xl border-[5px] border-neutral-950/50 contrast-[105%] max-w-full md:max-w-[25vw] lg:max-w-[15vw] h-auto"
                width={545}
                height={1031}
                loading="lazy"
              />
            </Animate>
            <Animate variants={fadeDu3} className="px-3 md:px-5 md:pt-32">
              <Image
                src="/assets/media/work/simone/dark-3.webp"
                alt="Dark 3"
                className="rounded-2xl border-[5px] border-neutral-950/50 contrast-[105%] max-w-full md:max-w-[25vw] lg:max-w-[15vw] h-auto"
                width={545}
                height={1031}
                loading="lazy"
              />
            </Animate>
          </div>
          <div className="flex flex-col gap-10 sticky top-0 px-6 lg:px-32 w-full">
            <h2 className="font-ogg text-4xl md:text-6xl">
              <Animate
                variants={fade}
                element="p"
                className="leading-10 md:leading-20"
              >
                A Calm, Focused Space
              </Animate>
              <Animate
                variants={fadeD1}
                element="p"
                className="leading-10 md:leading-20"
              >
                For Light and Dark Moments
              </Animate>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] gap-5">
              <Animate
                element="p"
                variants={fadeDu1D1}
                className="text-lg font-medium text-neutral-400"
              >
                Dark mode softens the screen, easing the eyes in low-light
                spaces. It lets users focus without glare or fatigue — making
                work feel effortless, even at midnight.
              </Animate>

              <Animate
                element="p"
                variants={fadeDu1D3}
                className="text-lg font-medium text-neutral-400 md:px-5"
              >
                It&apos;s not just a look — it&apos;s a smarter choice. On OLED screens,
                it saves energy. For users, it saves time. Beauty meets
                practicality in every pixel.
              </Animate>
            </div>
          </div>
        </div>
        <Animate
          variants={fade}
          className="font-ogg text-[40vw] h-[36vw] flex justify-center"
          style={{ y: y1 }}
        >
          Dark
        </Animate>
      </div>
    </section>
  );
};
export default memo(Dark);
