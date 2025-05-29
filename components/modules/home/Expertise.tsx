import { memo } from "react";
import Image from "next/image";
import { expertiseList } from "@/data/expertise";
import { animate } from "@/lib/animation/animate";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const fadeScale2 = animate({ type: "fadeScale", delay: 0.5 });

const Expertise = () => {
  return (
    <section className="w-full mt-32">
      <div className="w-[90%] 2xl:w-[70%] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl text-center p-4">Areas of Expertise</h2>
        <div className="grid md:grid-cols-[repeat(3,calc(33.33333%-1.666666666rem))] gap-5 lg:gap-10 ">
          {expertiseList.map((item, i) => (
            <Animate
              key={`${i}`}
              variants={fadeScale2}
              className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden"
            >
              <Image
                src={`/assets/media/icons/${item.icon}.webp`}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="w-10 h-10"
              />
              <h3 className="text-lg font-semibold ">{item.title}</h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                {item.details}
              </p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};
export default memo(Expertise);
