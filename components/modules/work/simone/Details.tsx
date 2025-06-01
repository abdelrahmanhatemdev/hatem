import { memo } from "react";
import { stack, details } from "@/data/works/simone";
import dynamic from "next/dynamic";
import { fade, fadeD2, fadeD4, fillVerticalFade } from "@/lib/animation";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));
const StackList = dynamic(() => import("@/components/custom/StackList"));

const Details = () => {
  return (
    <section className="px-3 md:px-6">
      <Animate
        variants={fade}
        element="h1"
        className="py-8 lg:py-[2vw] text-[12vw] md:text-[9vw] font-black font-satoshi"
      >
        Simone
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
          <Animate
            variants={fillVerticalFade}
            className="border-s border-neutral-200 px-2 text-neutral-500 font-semibold text-xs md:text-[1vw] pb-5"
          >
            <StackList stack={stack} />
          </Animate>
        </div>
        <Animate
          variants={fadeD4}
          className="text-base md:text-[1.7vw] font-medium text-neutral-200"
        >
          I designed Simone as a refined website for an Italian furniture
          agency, crafted to highlight timeless aesthetics and elevate brand
          presence. It elegantly showcases furniture collections with smooth
          interactions, immersive visuals, and responsive layouts. With a design consistency, and performance, it helps
          the agency connect with design-conscious clients and express its
          identity online.
        </Animate>
      </div>
    </section>
  );
};
export default memo(Details);
