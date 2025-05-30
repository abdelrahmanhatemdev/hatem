import Image from "next/image";
import { memo } from "react";
import { fadeDu1D3, fadeScaleD1 } from "@/lib/animation";

import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const DarkCaption = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex flex-col gap-16 justify-center items-center">
        <div>
          <Animate variants={fadeDu1D3} className="w-full h-full">
            <Image
              src="/assets/media/work/vogue-admin/home.webp"
              alt="Dashboard"
              className="rounded-xl border-[10px] border-neutral-950/50 max-w-full md:max-w-[50vw] h-auto"
              width={1017}
              height={617}
               loading="lazy"
            />
          </Animate>
        </div>
        <Animate variants={fadeScaleD1} element="p" className="text-lg md:text-2xl max-w-[600px] text-center font-satoshi text-neutral-500">
          User research showed that a{" "}
          <strong className="font-semibold text-white">
            dark theme reduces eye strain, fatigue and enhances usability
          </strong>{" "}
          in low-light environments.
        </Animate>
      </div>
    </section>
  );
};
export default memo(DarkCaption);
