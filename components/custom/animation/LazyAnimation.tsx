import { domAnimation, LazyMotion } from "framer-motion";
import { ReactNode } from "react";

const LazyAnimation = ({ children }: { children: ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
export default LazyAnimation;
