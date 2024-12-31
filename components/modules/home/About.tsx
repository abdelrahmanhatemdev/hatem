
import { memo } from "react";

import dynamic from "next/dynamic"
import Loading from "@/components/custom/Loading";

const ResponsiveWeb = dynamic(() => import("@/components/modules/home/about/ResponsiveWeb"), {
  loading: Loading
})

const Performance = dynamic(() => import("@/components/modules/home/about/Performance"), {
  loading: Loading
})

const About = () => {

  return (
    <section className="w-full mt-24">
      <div className="w-[1225px] mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-[calc(60%-1.25rem)_calc(40%-1.25rem)] gap-10 ">
          <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-16 flex flex-col gap-4 justify-center">
            <h2 className="text-3xl font-semibold">
              Crafting Code with Precision and Purpose
            </h2>
            <div>
              <span className="text-xl text-neutral-400 leading-6 font-normal">
                I am passionate and dedicated for creating high-performing,
                seamless web applications. With expertise in building scalable
                and efficient frontend solutions, I specialize in turning
                complex ideas into functional, user-friendly experiences.
              </span>
              <span className="text-xl text-neutral-400 leading-6 font-normal">
                With a commitment to excellence and adaptability, I aim to
                deliver results that not only meet but exceed
                expectations—empowering businesses to thrive in the digital
                landscape.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center">
              <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                <span className="text-3xl">+</span>
                <span>5</span>
              </h3>
              <p className="font-semibold tracking-wider text-center px-6">
                Years of Experience
              </p>
            </div>
            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center">
              <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                <span className="text-3xl">+</span>
                <span>30</span>
              </h3>
              <p className="font-semibold tracking-wider text-center px-6">
                Stunning Projects
              </p>
            </div>
            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center">
              <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                <span className="text-3xl">+</span>
                <span>20</span>
              </h3>
              <p className="font-semibold tracking-wider text-center px-6">
                Clients
              </p>
            </div>
            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-10 flex flex-col gap-2 items-center justify-center">
              <h3 className="text-5xl font-medium bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent flex gap-1 items-center">
                <span>100</span>
                <span className="text-3xl">%</span>
              </h3>
              <p className="font-semibold tracking-wider text-center px-6">
                Quality
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[calc(50%-1.25rem)_calc(50%-1.25rem)] gap-10">
          <ResponsiveWeb/>
          <Performance/>
        </div>
      </div>
    </section>
  );
};
export default memo(About);
