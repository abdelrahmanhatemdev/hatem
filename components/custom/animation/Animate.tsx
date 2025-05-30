"use client";
import { motion, MotionStyle, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MotionElementTag = "div" | "section" | "article" | "header" | "footer" | "main" | "nav" | "p" | "span" | "a" | "button" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AnimateOptions {
  children?: ReactNode;
  variants: Variants;
  element?: MotionElementTag;
  className?: string;
  viewOnce?: boolean;
  style?: MotionStyle | undefined;
}

const Animate = ({
  children,
  variants,
  element = "div",
  className,
  viewOnce = false, style
}: AnimateOptions) => {
  const MotionTag = motion[element];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewOnce }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};

export default Animate;
