import Image from "next/image";
import { memo } from "react";
import {
  fadeD1,
  fadeD2,
  fadeD3,
  fadeD4,
  fadeDu1,
  fadeDu2,
  fadeDu3,
  fadeScaleD4,
  fadeScaleD5,
} from "@/lib/animation";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const DashboardMobile = () => {
  return (
    <section className="py-10 md:py-32 px-3 md:px-6 w-full">
      <div className="flex justify-between flex-wrap gap-20 md:px-6 lg:px-28 w-full">
        <div className="flex flex-col gap-10 w-full md:w-[calc(50%-2.5rem)]">
          <h2 className="font-ogg text-4xl md:text-[4vw]">
            <Animate element="p" variants={fadeD1}>
              Manage with Ease
            </Animate>
            <Animate element="p" variants={fadeD2}>
              Anytime
            </Animate>
            <Animate element="p" variants={fadeD3}>
              Anywhere
            </Animate>
          </h2>
          <Animate
            element="p"
            variants={fadeD4}
            className="text-lg font-medium text-neutral-400 md:text-[1.3vw]"
          >
            I built a responsive, user-friendly dashboard that adapts seamlessly
            to any device, ensuring a smooth experience. Its structured layout
            helps users stay focused, making key insights and actions easily
            accessible.
          </Animate>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <Animate
              variants={fadeScaleD4}
              className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center"
            >
              <h3 className="text-xl font-semibold md:text-[1.2vw]">
                Real-Time Updates
              </h3>
              <p className="font-semibold text-neutral-400 md:text-[.9vw]">
                Instantly reflects changes and new data, keeping users informed
                without manual refreshes.
              </p>
            </Animate>
            <Animate
              variants={fadeScaleD5}
              className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center"
            >
              <h3 className="text-xl font-semibold md:text-[1.2vw]">
                Intelligent Navigation
              </h3>
              <p className="font-semibold text-neutral-400 md:text-[.9vw]">
                A well-structured menu and shortcuts allow users to access key
                sections effortlessly.
              </p>
            </Animate>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 grow md:w-[calc(50%-2.5rem)]">
          <Animate variants={fadeDu2} className="flex items-center">
            <Image
              src="/assets/media/work/vogue-admin/phone-1.webp"
              alt="Dashboard Phone 1"
              className="rounded-[2vw] border border-neutral-800"
              width={306}
              height={600}
              loading="lazy"
            />
          </Animate>
          <div className="flex flex-col gap-10">
            <Animate variants={fadeDu1}>
              <Image
                src="/assets/media/work/vogue-admin/phone-2.webp"
                alt="Dashboard Phone 2"
                className="rounded-[2vw] border border-neutral-800"
                width={306}
                height={600}
                loading="lazy"
              />
            </Animate>
            <Animate variants={fadeDu3}>
              <Image
                src="/assets/media/work/vogue-admin/home-sm.webp"
                alt="Dashboard 3"
                className="rounded-[2vw] border border-neutral-800"
                width={306}
                height={600}
                loading="lazy"
              />
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(DashboardMobile);
