"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { cn, cubicBezier } from "@/lib/utils";
import { motion } from "framer-motion";
import { slideTransition, slideVariants } from "@/lib/animation/slider";
import LazyAnimation from "@/components/custom/animation/LazyAnimation";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(1);
  const [progress, setProgress] = useState<number>(0);
  const [isAutoplaying, setIsAutoplaying] = useState<boolean>(false);
  const [isProgressing, setIsProgressing] = useState<boolean>(false);

  const autoplayDelay = 8000;

  const slideParagraphDelay = 0.4;
  const slideSpanDelay = 0.2;

  useEffect(() => {
    const easeInOut = cubicBezier(0.9, 0, 0.2, 1);
    const duration = autoplayDelay;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateProgress = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;

      const linearProgress = elapsed / duration;

      if (linearProgress >= 1) {
        startTime = now;
        setIsProgressing(false);
        setIsAutoplaying(false);
        setProgress(100);
        return;
      }

      const easedProgress = easeInOut(Math.min(linearProgress, 1));

      setProgress(easedProgress * 100);

      animationFrameId = requestAnimationFrame(animateProgress);
    };

    if (isAutoplaying && isProgressing) {
      animationFrameId = requestAnimationFrame(animateProgress);
    }

    return () => {
      cancelAnimationFrame(animationFrameId); // Cancel the animation frame.
    };
  }, [isAutoplaying, isProgressing, autoplayDelay, activeSlide]);

  return (
    <section className="h-screen w-[90%] 2xl:w-[70%] mx-auto">
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
        className="h-full lg:w-[85%] mx-auto hero-swiper relative"
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex + 1;

          if (newIndex === activeSlide) {
            return;
          }
          setProgress(0);
          setActiveSlide(newIndex);
          setIsAutoplaying(true);
          setIsProgressing(true);
        }}
        onAutoplayStart={() => {
          setIsAutoplaying(true);
          setIsProgressing(true);
        }}
        onAutoplayStop={() => {
          setIsAutoplaying(false);
          setIsProgressing(false);
          setProgress(0);
        }}
        spaceBetween={20}
      >
        {[1, 
        // 2, 3
      ].map((slide, index) => (
          <SwiperSlide key={index}>
            {slide === 1 && (
              <div className="h-full flex flex-col justify-center">
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw] flex items-center gap-[2vw] md:gap-[1vw] flex-wrap">
                  <LazyAnimation>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{ ...slideTransition, delay: 0 }}
                      className="flex gap-[2vw]"
                    >
                      <span >
                        <span className="font-extralight">I</span>
                        <span className="font-extralight">&apos;m </span>
                        
                      </span>
                      <span className="font-thin">a</span>
                    </motion.span>
                  </LazyAnimation>
                  <LazyAnimation>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{
                        ...slideTransition,
                        delay: 1 * slideSpanDelay,
                      }}
                      className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105"
                    >
                      <span>Frontend</span>
                    </motion.span>
                  </LazyAnimation>
                  <LazyAnimation>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{
                        ...slideTransition,
                        delay: 2 * slideSpanDelay,
                      }}
                    >
                      <strong className="inline-block font-extralight">
                        Developer
                      </strong>
                    </motion.span>
                  </LazyAnimation>
                </p>
                <LazyAnimation>
                  <motion.span
                    variants={slideVariants}
                    initial={`initial`}
                    animate={activeSlide === index + 1 ? `active` : `initial`}
                    exit={`exit`}
                    transition={{
                      ...slideTransition,
                      delay: 1 * slideParagraphDelay,
                    }}
                  >
                    <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw] flex gap-2 lg:gap-4 items-center">
                      <motion.span
                        variants={slideVariants}
                        initial={`initial`}
                        animate={
                          activeSlide === index + 1 ? `active` : `initial`
                        }
                        exit={`exit`}
                        transition={{
                          ...slideTransition,
                          delay: 1 * slideParagraphDelay + slideSpanDelay,
                        }}
                      >
                        <span className="font-light">Specialized </span>
                      </motion.span>
                      <motion.span
                        variants={slideVariants}
                        initial={`initial`}
                        animate={
                          activeSlide === index + 1 ? `active` : `initial`
                        }
                        exit={`exit`}
                        transition={{
                          ...slideTransition,
                          delay: 1 * slideParagraphDelay + 2 * slideSpanDelay,
                        }}
                      >
                        <span className="font-thin">in </span>
                      </motion.span>
                      <motion.span
                        variants={slideVariants}
                        initial={`initial`}
                        animate={
                          activeSlide === index + 1 ? `active` : `initial`
                        }
                        exit={`exit`}
                        transition={{
                          ...slideTransition,
                          delay: 1 * slideParagraphDelay + 3 * slideSpanDelay,
                        }}
                        className="inline-flex justify-center items-center"
                      >
                        <span className="inline-block font-black">React </span>
                      </motion.span>
                    </p>
                  </motion.span>
                </LazyAnimation>
              
              </div>
            )}
            {slide === 2 && (
              <div className="h-full flex flex-col justify-center">
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                  <span className="font-thin">Focused on </span>
                  <span className="font-extralight">building </span>
                </p>
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                  <span className="font-extralight">blazing-fast </span>
                  <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                    performant, scalable,
                  </strong>
                </p>
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                  <span className="font-thin">and </span>
                  <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                    seamlessly integrated
                  </strong>
                  <span className="font-extralight"> web apps </span>
                </p>
              </div>
            )}
            {slide === 3 && (
              <div className="h-full flex flex-col justify-center">
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                  <span className="font-thin"> With </span>
                  <span className="font-light">Code Speaks </span>
                  <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                    Performance
                  </strong>
                </p>
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                  <span className="font-thing">I </span>
                  <span className="font-extralight">value </span>
                  <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                    Quality
                  </strong>
                  <span className="font-light"> over </span>
                  <span className="font-thin opacity-90 text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] text-neutral-300">
                    Quantity
                  </span>
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="absolute [transition:opacity_0.3s] z-10 bottom-[7vh] top-[var(--swiper-pagination-top, auto)] left-[0] flex gap-[6vw] w-full">
          {[1, 2, 3].map((slider) => {
            const isActive = slider === activeSlide;
            return (
              <div
                className={cn(
                  "flex items-center gap-[2vw]",
                  isActive ? "grow" : ""
                )}
                key={slider}
              >
                <span
                  className={cn(
                    "text-center text-[1.5rem] sm:text-[3rem] md:text-[1.1rem] text-foreground cursor-pointer",
                    `font-${isActive ? "bold" : "thin"}`
                  )}
                >
                  0{slider}.
                </span>
                {isActive && (
                  <div className="h-[0.01rem] w-full bg-muted">
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
export default memo(Hero);
