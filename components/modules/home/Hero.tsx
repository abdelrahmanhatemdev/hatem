"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn, cubicBezier } from "@/lib/utils";

const Hero = () => {
  const [sliderIndex, setSliderIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isAutoplaying, setIsAutoplaying] = useState<boolean>(false);

  const autoplayDelay = 5000;

  useEffect(() => {
    const easeInOut = cubicBezier(0.9, 0, 0.2, 1);
    const duration = autoplayDelay;
    let startTime: number | null = null;
    let lastTime: number = 0;

    const animateProgress = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;

      const linearProgress = elapsed / duration;

      if (linearProgress >= 1) {
        setProgress(100);
        setIsAutoplaying(false);
        startTime = now;
      } else {
        const easedProgress = easeInOut(Math.min(linearProgress, 1));
        setProgress(easedProgress * 100);
        requestAnimationFrame(animateProgress);
      }
    };

    if (isAutoplaying) {
      requestAnimationFrame(animateProgress);
    }

    return () => cancelAnimationFrame(lastTime);
  }, [isAutoplaying]);

  return (
    <section className="h-screen w-full">
      <Swiper
        modules={[Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">0${index + 1}.</span>`;
          },
        }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-[85%] mx-auto hero-swiper relative"
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex + 1;

          if (newIndex === sliderIndex) {
            return;
          }

          setSliderIndex(newIndex);
          setIsAutoplaying(true);
        }}
        onAutoplayStart={() => setIsAutoplaying(true)}
        onAutoplayStop={() => {
          setIsAutoplaying(false);
          setProgress(0);
        }}
      >
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center ">
            <p className="text-[4vw] leading-[6vw] flex items-center gap-[1vw]">
              <span>
                <span className="font-extralight">I</span>
                <span className="font-extralight">'m </span>
              </span>
              <span className="font-thin">a</span>
              <span className="w-[10vw] h-[5vw] relative inline-block">
                <Image src="/assets/images/nextjs.png" fill alt="Next.js" />
              </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                Developer
              </strong>
            </p>
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-light">Specialized </span>
              <span className="font-thin">in </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                Frontend Development
              </strong>
            </p>
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-extralight">Based </span>
              <span className="font-thin">in </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                Cairo
              </strong>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center">
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-thin">Focused on </span>
              <span className="font-extralight">building </span>
            </p>
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-extralight">blazing-fast </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                performant, scalable,
              </strong>
            </p>
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-thin">and </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                seamlessly integrated
              </strong>
              <span className="font-extralight"> web apps </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center">
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-thin"> With </span>
              <span className="font-light">Code Speaks </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                Performance
              </strong>
            </p>
            <p className="text-[4vw] leading-[6vw]">
              <span className="font-thing">I </span>
              <span className="font-extralight">value </span>
              <strong className="font-extrabold tracking-wider text-[4.5vw] scale-y-105">
                Quality
              </strong>
              <span className="font-light"> over </span>
              <span className="font-thin opacity-90 text-[3.5rem] text-neutral-300">
                Quantity
              </span>
            </p>
          </div>
        </SwiperSlide>
        <div className="absolute [transition:opacity_0.3s] z-10 bottom-[7vh] top-[var(--swiper-pagination-top, auto)] left-[0] flex gap-[6vw]">
          {[1, 2, 3].map((slider) => {
            const isActive = slider === sliderIndex;
            return (
              <div className="flex items-center gap-[2vw]" key={slider}>
                <span
                  className={cn(
                    "text-center text-[1.1rem] text-foreground cursor-pointer",
                    `font-${isActive ? "bold" : "thin"}`
                  )}
                >
                  0{slider}.
                </span>
                {isActive && (
                  <div className="h-[0.01rem] w-[65vw] bg-muted">
                    <div
                      className="h-full bg-foreground"
                      style={{
                        width: `${progress}%`,
                        transitionTimingFunction: "ease-in-out",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};
export default Hero;
