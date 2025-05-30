
import { memo } from "react";
import Image from "next/image";
import { stack } from "@/data/stack";
import { animate } from "@/lib/animation/animate";
import dynamic from "next/dynamic";

const Animate = dynamic(() => import("@/components/custom/animation/Animate"));
const SquaresBackground = dynamic(() => import("@/components/custom/SquaresBackground"));

const fade = animate({ type: "fade" });
const fade1 = animate({ type: "fade", delay: 0.4 });

const Stack = () => {
  return (
    <section className="mt-20 relative py-60">
      <div className="w-full h-40 bg-gradient-to-b from-black to-transparent absolute inset-0 z-0"></div>
      <div className="w-full h-40 bg-gradient-to-t from-black to-transparent absolute start-0 bottom-0 z-0"></div>
      <SquaresBackground/>
      <Animate viewOnce={true} variants={fade1}>
        <div className="flex flex-col gap-4 text-center p-10">
          <h2 className="text-4xl md:text-6xl  text-center">Stack</h2>
          <p className="text-sm md:text-md 2xl:text-lg text-neutral-400">
            My preferred tools and the foundation behind my proficiency to
            create seamless high-performance applications.
          </p>
        </div>
      </Animate>
      <Animate variants={fade} viewOnce={true}>
        <div className="w-[70%] sm:w-[50%] mx-auto grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 mt-10 gap-[3vw] lg:gap-[1vw]">
          {stack.map((tech, i) => (
            <Animate
              key={`${tech.src}`}
              viewOnce={true}
              variants={{
                ...fade1,
                visible: {
                  ...fade1.visible,
                  transition: {
                    ...fade1.visible.transition,

                    delay: 0.05 * (i + 1),
                  },
                },
              }}
            >
              <div className="flex flex-col gap-4 items-center w-full">
                <div className="group flex flex-col items-center justify-center cursor-pointer p-3 bg-neutral-950 transition-colors rounded-full relative border border-neutral-900 shadow-[0_0_30px_rgba(80,80,80,0.3)]">
                   <Image
                      src={`/assets/media/glass-ball.webp`}
                      alt=""
                      width={100}
                      height={100}
                      className="absolute inset-0 w-full h-full opacity-5 z-10"
                    />
                    
                    <Image
                      src={`/assets/media/stack/${tech.src}.webp`}
                      alt=""
                      width={100}
                      height={100}
                      className="size-10"
                    />
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <p className="transition-opacity duration-500 text-xs text-center font-bold leading-3 rounded bg-neutral-950 border border-neutral-900 p-1">
                    {tech.title}
                  </p>
                  <p className="text-neutral-400 text-xs text-center flex items-center gap-1"><strong className="text-white text-sm">{tech.years} </strong><span>years</span></p>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </Animate>
    </section>
  );
};
export default memo(Stack);
