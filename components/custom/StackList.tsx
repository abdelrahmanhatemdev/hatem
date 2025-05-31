import { memo } from "react";
import dynamic from "next/dynamic";
import { fadeSlideUpNoTransition } from "@/lib/animation";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

function StackList({ stack }: { stack: string[] }) {
  return (
    <>
      {stack.map((tech, i) => (
        <Animate
          key={i}
          transition={{
            duration: 0.3,
            delay: 0.6 + i * 0.1,
            ease: "easeInOut",
          }}
          element="p"
          variants={fadeSlideUpNoTransition}
        >
          {tech}
        </Animate>
      ))}
    </>
  );
}
export default memo(StackList);
