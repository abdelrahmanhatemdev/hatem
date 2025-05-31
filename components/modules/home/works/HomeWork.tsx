import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { fadeScale, fadeScaleD1, fadeScaleD2, fadeScaleD3, fadeScaleD4, fadeScaleD5 } from "@/lib/animation";
const StackList = dynamic(() => import("@/components/custom/StackList"));
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const HomeWork = ({
  basic,
  stack,
  images,
}: {
  basic: BasicType;
  stack: StackType;
  images: HomeImagesType;
}) => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-[calc(100%-48vw)_48vw] gap-5 lg:gap-0 ">
      <div className="flex flex-col justify-between order-2 lg:order-1">
        <div className="flex flex-col gap-24 order-2 lg:order-1">
          <div className="grid-cols-1 lg:grid-cols-[60%_40%] hidden lg:grid">
            <Animate variants={fadeScale} viewOnce={true}>
              <Link href={`/work/vogue-admin`}>
                <h2 className="uppercase text-6xl font-bold">{basic.name}</h2>
              </Link>
            </Animate>

            <Animate variants={fadeScaleD1} viewOnce={true}>
              <div className="text-sm flex flex-col justify-end gap-2">
                <span className="text-neutral-600 font-extrabold">Role</span>
                <p className="text-neutral-400">{basic.role}</p>
              </div>
            </Animate>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] mt-20 lg:mt-0">
            <Animate variants={fadeScaleD2} viewOnce={true}>
              <div className="flex flex-col justify-start gap-2">
                <span className="text-neutral-600 font-bold lg:font-extrabold text-lg lg:text-sm">
                  Description
                </span>
                <p className="text-neutral-400 md:max-w-96 lg:max-w-72 text-base lg:text-sm">
                  {basic.description}
                </p>
              </div>
            </Animate>

            <Animate variants={fadeScaleD3} viewOnce={true}>
              <div className="text-sm hidden lg:flex flex-col justify-start gap-2 ">
                <span className="text-neutral-600 font-extrabold">Stack</span>
                <div className="text-neutral-400">
                  <StackList stack={stack}/>
                </div>
              </div>
            </Animate>
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%] order-1 lg:order-3">
          <Animate variants={fadeScaleD4} viewOnce={true}>
            <div className="text-sm flex flex-col justify-start gap-2">
              <p className="text-neutral-400 max-w-64">{basic.type}</p>
            </div>
          </Animate>

          <div className="text-sm flex flex-col justify-start gap-2 items-end lg:items-start">
            <Animate variants={fadeScaleD5} viewOnce={true}>
              <div className="text-neutral-400">
                <p>&copy; {basic.year}</p>
              </div>
            </Animate>
          </div>
        </div>
      </div>
      <div className="lg:hidden mb-4">
        <Link href={`/work/vogue-admin`}>
          <h2 className="uppercase text-6xl font-bold">{basic.name}</h2>
        </Link>
      </div>
      <Link href={`/work/vogue-admin`} className=" order-1 lg:order-2">
        <div className="group relative flex justify-center h-[70vw] lg:h-[35vw]">
          <Animate
            variants={fadeScaleD1}
            className="absolute inset-0"
            viewOnce={true}
          >
            <Image
              src={`${images.home.src}`}
              alt={`${images.home.alt}`}
              className="rounded-md border border-neutral-800 w-[97%] group-hover:scale-95 transition-all duration-700"
              width={images.home.width}
              height={images.home.height}
            />
          </Animate>

          <Animate
            variants={fadeScaleD3}
            className="absolute -right-2 bottom-0"
            viewOnce={true}
          >
            <Image
              src={`${images.phone.src}`}
              alt={`${images.phone.alt}`}
              className="rounded-lg border border-neutral-200 w-[20vw] lg:w-[9vw] lg:right-0 group-hover:scale-80 transition-all duration-700"
              width={images.phone.width}
              height={images.phone.height}
            />
          </Animate>
        </div>
      </Link>
    </div>
  );
};
export default memo(HomeWork);
