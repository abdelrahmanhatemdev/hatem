"use client";
import { memo, ReactNode } from "react";
import { heroSliderText } from "@/lib/animation";
import { motion } from "framer-motion";

const slideParagraphDelay = 0.4;
const slideSpanDelay = 0.2;

interface HeroTextAnimateType {
  children: ReactNode;
  active: boolean;
  className?: string;
  spanDelay?: number;
  paragraphDelay?: number;
}

function HeroTextAnimate({
  children,
  active,
  paragraphDelay = 0,
  spanDelay = 0,
  className,
}: HeroTextAnimateType) {
  return (
    <motion.span
      variants={heroSliderText}
      initial="hidden"
      animate={active ? `visible` : `hidden`}
      exit="exit"
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        delay: paragraphDelay * slideParagraphDelay + spanDelay * slideSpanDelay,
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
export default memo(HeroTextAnimate);
