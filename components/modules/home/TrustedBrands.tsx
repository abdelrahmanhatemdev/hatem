import { brands } from "@/data/brands";
import Image from "next/image";
import { memo } from "react";
import dynamic from "next/dynamic";
import { fadeD1NoTransition, fadeScale } from "@/lib/animation";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const TrustedBrands = () => {
  return (
    <Animate variants={fadeScale}>
      <div className="pt-32 h-full flex flex-col gap-10 justify-center items-center">
        <h3 className="text-4xl text-center p-4">
          Trusted By Innovative Brands
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 ">
          {brands.map((brand, i) => (
            <Animate
              key={`${i}`}
              viewOnce={true}
              transition={{
                duration: 0.8,
                delay: 0.05 * (i + 1),
              }}
              variants={fadeD1NoTransition}
            >
              <div className="group cursor-pointer p-2 bg-neutral-950 rounded-3xl border border-neutral-800 shadow-[0_0_20px_rgba(80,80,80,0.2)]">
                <Image
                  src={`/assets/media/brands/${brand}.webp`}
                  alt={`${brand.replaceAll("-", " ")}`}
                  width={180}
                  height={180}
                  className="size-28"
                />
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </Animate>
  );
};
export default memo(TrustedBrands);
