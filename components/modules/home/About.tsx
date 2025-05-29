import { memo } from "react";
import dynamic from "next/dynamic";
import { animate } from "@/lib/animation/animate";



const Description = dynamic(
  () => import("@/components/modules/home/about/Description")
);

const ResponsiveWeb = dynamic(
  () => import("@/components/modules/home/about/ResponsiveWeb")
);

const Performance = dynamic(
  () => import("@/components/modules/home/about/Performance")
);

const SPA = dynamic(() => import("@/components/modules/home/about/SPA"));

const MobileFirst = dynamic(
  () => import("@/components/modules/home/about/MobileFirst")
);

const PixelPerfect = dynamic(
  () => import("@/components/modules/home/about/PixelPerfect")
);

const TrustedBrands = dynamic(
  () => import("@/components/modules/home/TrustedBrands")
);

const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const fadeScale = animate({ type: "fadeScale" });
const fadeScale1 = animate({ type: "fadeScale", delay: 0.4 });

const About = () => {
  return (
    <section className="w-full mt-24">
      <div className="w-[90%] 2xl:w-[70%] mx-auto flex flex-col gap-10">
        <Description />
        <div className="grid md:grid-cols-[calc(50%-1.25rem)_calc(50%-1.25rem)] gap-10">
          <Animate variants={fadeScale} className="max-w-full">
            <ResponsiveWeb />
          </Animate>
          <Animate variants={fadeScale1}>
            <Performance />
          </Animate>
        </div>
        <div className="grid lg:grid-cols-[repeat(3,calc(33.33333%-1.666666666rem))] gap-10 ">
          <SPA />
          <MobileFirst />
          <PixelPerfect />
        </div>
        <TrustedBrands />
      </div>
    </section>
  );
};
export default memo(About);
