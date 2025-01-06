"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { cn, cubicBezier } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(1);
  const [progress, setProgress] = useState<number>(0);
  const [isAutoplaying, setIsAutoplaying] = useState<boolean>(false);

  const autoplayDelay = 8000;

  const slideVariants = {
    initial: { opacity: 0, x: 200 },
    active: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  const slideTransition = { duration: 1, ease: [0.4, 0, 0.2, 1] };

  const slideParagraphDelay = 0.4;
  const slideSpanDelay = 0.2;

  useEffect(() => {
    const easeInOut = cubicBezier(0.9, 0, 0.2, 1);
    const duration = autoplayDelay;
    let startTime: number | null = null;
    let lastTime: number = 0;

    const animateProgress = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;

      const linearProgress = elapsed / duration;

      if (linearProgress >= 1.038) {
        startTime = now;
      }

      const easedProgress = easeInOut(Math.min(linearProgress, 1));
      setProgress(easedProgress * 100);

      requestAnimationFrame(animateProgress);
    };

    if (isAutoplaying) {
      requestAnimationFrame(animateProgress);
    }

    return () => cancelAnimationFrame(lastTime);
  }, [isAutoplaying]);

  return (
    <section className="h-screen 2xl:w-[80vw] mx-auto">
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

          if (newIndex === activeSlide) {
            return;
          }

          setActiveSlide(newIndex);
          setIsAutoplaying(true);
        }}
        onAutoplayStart={() => setIsAutoplaying(true)}
        onAutoplayStop={() => {
          setIsAutoplaying(false);
          setProgress(0);
        }}
      >
        {[1, 2, 3].map((slide, index) => (
          <SwiperSlide key={index}>
            {slide === 1 && (
              <div className="h-full flex flex-col justify-center">
                <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw] flex items-center gap-[1vw]">
                  <motion.span
                    variants={slideVariants}
                    initial={`initial`}
                    animate={activeSlide === index + 1 ? `active` : `initial`}
                    exit={`exit`}
                    transition={{ ...slideTransition, delay: 0 }}
                  >
                    <span>
                      <span className="font-extralight">I</span>
                      <span className="font-extralight">'m </span>
                    </span>
                    <span className="font-thin">a</span>
                  </motion.span>
                  <motion.span
                    variants={slideVariants}
                    initial={`initial`}
                    animate={activeSlide === index + 1 ? `active` : `initial`}
                    exit={`exit`}
                    transition={{
                      ...slideTransition,
                      delay: 1* slideSpanDelay,
                    }}
                    className="w-[10vw] h-[5vw] relative inline-block"
                  >
                    <span >
                      <Image
                        src="/assets/media/nextjs.png"
                        fill
                        alt="Next.js"
                      />
                    </span>
                  </motion.span>
                  <motion.span
                    variants={slideVariants}
                    initial={`initial`}
                    animate={activeSlide === index + 1 ? `active` : `initial`}
                    exit={`exit`}
                    transition={{
                      ...slideTransition,
                      delay: 2* slideSpanDelay,
                    }}
                  >
                    <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                      Developer
                    </strong>
                  </motion.span>
                </p>

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
                  <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{
                        ...slideTransition,
                        delay: (1 * slideParagraphDelay) + slideSpanDelay,
                      }}
                    >
                      <span className="font-light">Specialized </span>
                    </motion.span>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{
                        ...slideTransition,
                        delay: (1 * slideParagraphDelay) + (2 * slideSpanDelay),
                      }}
                    >
                      <span className="font-thin">in </span>
                    </motion.span>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{
                        ...slideTransition,
                        delay: (1 * slideParagraphDelay) + (3 * slideSpanDelay),
                      }}
                    >
                      <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                      Frontend First, Full-Stack-Ready 
                      </strong>
                    </motion.span>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{
                        ...slideTransition,
                        delay: (1 * slideParagraphDelay) + (4 * slideSpanDelay),
                      }}
                    >
                      <strong className="font-light">
                      {" "}Development
                      </strong>
                    </motion.span>
                  </p>
                </motion.span>
                <motion.span
                  variants={slideVariants}
                  initial={`initial`}
                  animate={activeSlide === index + 1 ? `active` : `initial`}
                  exit={`exit`}
                  transition={{ ...slideTransition, delay: (2 * slideParagraphDelay) }}
                >
                  <p className="text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] md:leading-[5vw]">
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{ ...slideTransition, delay: (2 * slideParagraphDelay) + (1 * slideSpanDelay) }}
                    >
                      <span className="font-extralight">Based </span>
                    </motion.span>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{ ...slideTransition, delay: (2 * slideParagraphDelay) + (2 * slideSpanDelay) }}
                    >
                      <span className="font-thin">in </span>
                    </motion.span>
                    <motion.span
                      variants={slideVariants}
                      initial={`initial`}
                      animate={activeSlide === index + 1 ? `active` : `initial`}
                      exit={`exit`}
                      transition={{ ...slideTransition, delay:(2 * slideParagraphDelay) + (3 * slideSpanDelay) }}
                    >
                      <strong className="font-extrabold md:tracking-wider text-[2.3rem] sm:text-[3rem] md:text-[3.5vw] scale-y-105">
                        Cairo
                      </strong>
                    </motion.span>
                  </p>
                </motion.span>
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
              <div className={cn("flex items-center gap-[2vw]", isActive ? "grow": "" )} key={slider}>
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
