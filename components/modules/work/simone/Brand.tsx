import Image from "next/image";
import { memo } from "react";
import { fadeDu1, fadeDu3, fadeScale, fadeScaleD2 } from "@/lib/animation";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Brand = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0">
        <Animate
          variants={fadeDu1}
          className="md:border-[12px] md:border-neutral-950/50"
        >
          <div className="flex justify-center items-center bg-black aspect-square">
            <div className="flex flex-col justify-center items-center w-full h-full md:p-3">
              <Animate
                variants={fadeScale}
                className="relative flex flex-col gap-10 items-center justify-center font-satoshi border-[15px] border-neutral-950/50 p-6 aspect-square"
              >
                <div className="absolute right-3 top-3">
                  <Image
                    src={`/assets/media/work/simone/logo-light.webp`}
                    alt="Simone Logo Light"
                    width={50}
                    height={30}
                    loading="lazy"
                  />
                </div>
                <h2 className="text-3xl px-6">Our Vision</h2>
                <div className="max-w-[300px] text-center">
                  <p>
                    To craft digital experiences that reflect Simone’s timeless
                    aesthetic — refined, inviting, and rooted in Italian heritage.
                  </p>
                </div>
              </Animate>
            </div>
          </div>
        </Animate>
        <Animate
          variants={fadeDu3}
          className="md:border-[12px] md:border-neutral-100/95"
        >
          <div className="flex justify-center items-center bg-white aspect-square">
            <div className="flex flex-col justify-center items-center w-full h-full md:p-3">
              <Animate
                variants={fadeScaleD2}
                className="relative flex flex-col gap-10 items-center justify-center font-satoshi border-[15px] border-neutral-200/50 p-6 aspect-square text-black"
              >
                <div className="absolute right-3 top-3">
                  <Image
                    src={`/assets/media/work/simone/logo.webp`}
                    alt="Simone Logo"
                    width={50}
                    height={30}
                    loading="lazy"
                  />
                </div>
                <h2 className="text-3xl px-6">Our Mission</h2>
                <div className="max-w-[300px] text-center">
                  <p>
                    To celebrate craftsmanship by connecting people with furniture
                    that blends art, design, and emotion — all through a seamless
                    digital interface.
                  </p>
                </div>
              </Animate>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default memo(Brand);
