import Image from "next/image";
import { memo } from "react";
import { fadeD1, fadeD2, fadeDu1, fadeDu1D2, fadeDu1D3 } from "@/lib/animation";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const BigScreen = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-20 xl:gap-0 px-3 pt-10 md:p-28 div bg-neutral-950/50">
        <div className="flex flex-col items-center xl:items-start gap-10 order-2 xl:order-1 ">
          <Animate variants={fadeDu1} className="max-w-[750px]">
            <Image
              src="/assets/media/work/youtube-api/big-screen-1.webp"
              alt="Big Screen 1"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 max-w-full md:max-w-[90%] h-auto "
              width={1017}
              height={617}
              loading="lazy"
            />
          </Animate>
          <Animate variants={fadeDu1} className="max-w-[750px]">
            <Image
              src="/assets/media/work/youtube-api/big-screen-2.webp"
              alt="Big Screen 2"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 max-w-full md:max-w-[90%] h-auto "
              width={1017}
              height={617}
              loading="lazy"
            />
          </Animate>
        </div>
        <div className="flex flex-col gap-10 order-1 xl:order-2">
          <h2 className="font-ogg text-4xl md:text-[4rem]">
            <Animate element="p" variants={fadeD1}>
              Built for Speed
            </Animate>
            <Animate element="p" variants={fadeD2}>
              Made for Viewers
            </Animate>
          </h2>
          <Animate
            element="p"
            variants={fadeDu1D2}
            className="text-lg md:text-[2vw] lg:text-[1.1vw] font-medium text-neutral-400"
          >
            I designed this platform to simplify video discovery and enhance the
            viewing experience. With a sleek interface and smart features like
            real-time search, dark mode, and Shorts integration, everything is
            built for speed and usability—bringing YouTube’s core feel into a
            lightweight, custom-built clone.
          </Animate>
          <Animate
            element="p"
            variants={fadeDu1D3}
            className="text-lg md:text-[2vw] lg:text-[1.1vw] font-medium text-neutral-400"
          >
            Every detail is crafted for smooth interaction—whether you’re
            searching, watching, or browsing, it all feels seamless and
            intuitive. From fast-loading content to effortless navigation, this
            clone delivers a streamlined, distraction-free streaming experience.
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default memo(BigScreen);
