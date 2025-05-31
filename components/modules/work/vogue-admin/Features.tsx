"use client"
import { cn } from "@/lib/utils";
import { memo } from "react";
import { features } from "@/data/works/vogueAdmin";
import dynamic from "next/dynamic";
import { fadeSlideUp1 } from "@/lib/animation";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Features = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="bg-neutral-950/50 rounded-2xl md:rounded-[7rem] p-3 md:p-[5rem] flex flex-col gap-5 md:gap-10">
        {features.map((feature, i) => (
          <Animate
          key={i}
          variants={fadeSlideUp1}
            className={cn(
              "flex flex-col md:flex-row justify-between md:items-end group cursor-pointer",
              i !== features.length - 1
                ? "border-b-[5px] border-neutral-50 pb-5"
                : ""
            )}
          >
            <h2 className="text-4xl md:text-[4vw] font-ogg leading-16 md:leading-24">{feature.title}</h2>
            <ul className="flex flex-col gap-3 md:w-[23vw] lg:w-[17vw]">
              {feature.list.map((item, i) => {
                return (
                  <li
                    className="text-sm md:text-[1.3vw] lg:text-[1vw] font-satoshi font-medium lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
                    style={{
                      transitionDelay: i !== 0 ? `${i * 50}ms` : "",
                    }}
                    key={i}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </Animate>
        ))}
      </div>
    </section>
  );
};
export default memo(Features);
