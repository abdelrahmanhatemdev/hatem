import Image from "next/image";
import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fade,
  fadeD1,
  fadeDu1,
  fadeDu1D1,
  fadeDu1D3,
  fadeDu2,
  fadeDu3,
} from "@/lib/animation";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Dark = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <section ref={containerRef} className="py-10 lg:py-32 px-3 md:px-6">
      <div className=" bg-neutral-950/50 pt-10 md:pt-32 overflow-hidden ">
        <div className="flex flex-col gap-32 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
            <Animate variants={fadeDu1} className="px-3 md:px-5">
              <Image
                src="/assets/media/work/vogue-admin/dark-1.webp"
                alt="Dark 1"
                className="rounded-2xl border-[5px] border-neutral-950/50 contrast-[105%] max-w-full md:max-w-[25vw] lg:max-w-[15vw] h-auto"
                width={545}
                height={1031}
                loading="lazy"
              />
            </Animate>
            <Animate variants={fadeDu2} className="px-3 md:px-5 md:pt-16">
              <Image
                src="/assets/media/work/vogue-admin/dark-2.webp"
                alt="Dark 2"
                className="rounded-2xl border-[5px] border-neutral-950/50 contrast-[105%] max-w-full md:max-w-[25vw] lg:max-w-[15vw] h-auto"
                width={545}
                height={1031}
                loading="lazy"
              />
            </Animate>
            <Animate variants={fadeDu3} className="px-3 md:px-5 md:pt-32">
              <Image
                src="/assets/media/work/vogue-admin/dark-3.webp"
                alt="Dark 3"
                className="rounded-2xl border-[5px] border-neutral-950/50 contrast-[105%] max-w-full md:max-w-[25vw] lg:max-w-[15vw] h-auto"
                width={545}
                height={1031}
                loading="lazy"
              />
            </Animate>
          </div>
          <div className="flex flex-col gap-10 sticky top-0 px-6 lg:px-32 w-full">
            <h2 className="font-ogg text-4xl md:text-6xl">
              <motion.p variants={fade} className="laeding-10 md:leading-20">
                Breathtaking Experience
              </motion.p>
              <motion.p variants={fadeD1} className="laeding-10 md:leading-20">
                {" "}
                In Light and Dark
              </motion.p>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] gap-5">
              <motion.p
                variants={fadeDu1D1}
                className="text-lg font-medium text-neutral-400"
              >
                Dark mode improves visual comfort by minimizing glare and
                reducing eye fatigue, making extended screen use easier on the
                eyes. It adapts to different lighting conditions, ensuring a
                smooth and comfortable experience, especially in dim
                environments.
              </motion.p>
              <motion.p
                variants={fadeDu1D3}
                className="text-lg font-medium text-neutral-400 md:px-5"
              >
                Beyond aesthetics, dark mode boosts battery life on OLED and
                AMOLED screens by using less power, allowing for longer device
                usage.
              </motion.p>
            </div>
          </div>
        </div>
        <Animate
          variants={fade}
          className="font-ogg text-[40vw] h-[36vw] flex justify-center"
          style={{ y: y1 }}
        >
          Dark
        </Animate>
      </div>
    </section>
  );
};
export default memo(Dark);
