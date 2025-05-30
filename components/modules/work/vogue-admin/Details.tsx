import { memo } from "react";
import { easeInOut, motion } from "framer-motion";
import { stack, details } from "@/data/works/vogueAdmin";
import dynamic from "next/dynamic";
import { fade, fadeD2, fadeD4, fadeScaleD2 } from "@/lib/animation";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Details = () => {
  return (
    <section className="px-3 md:px-6">
      <Animate
        variants={fade}
        element="h1"
        className="py-8 lg:py-[2vw] text-[12vw] md:text-[9vw] font-black font-satoshi"
      >
        Vogue Admin
      </Animate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-0">
        <div className="flex gap-5 lg:gap-20">
          <Animate
            variants={fadeD2}
            className="flex flex-col gap-2 lg:gap-[1vw]"
          >
            {details.map((item, i) => {
              const valueClass =
                "text-xs lg:text-[1.5vw] tracking-widest font-medium";
              return (
                <div className="flex flex-col *:leading-6" key={i}>
                  <h2 className="text-neutral-400 font-semibold md:text-[1vw]">
                    {item.title}
                  </h2>
                  {item?.href ? (
                    <a
                      target="_blank"
                      href={`${item.href}`}
                      className={valueClass}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={valueClass}>{item.value}</p>
                  )}
                </div>
              );
            })}
          </Animate>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{
              opacity: 1,
              height: "100%",
              transition: { duration: 2.5, ease: easeInOut },
            }}
            className="border-s border-neutral-200 px-2 text-neutral-500 font-semibold text-xs md:text-[1vw] pb-5"
          >
            {stack.map((tech, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: fadeScaleD2.visible.transition.delay + i * 0.1,
                  ease: easeInOut,
                }}
              >
                {tech}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <Animate
          variants={fadeD4}
          className="text-base md:text-[1.7vw] font-medium text-neutral-200"
        >
          I designed Vogue Admin as a powerful e-commerce platform to streamline
          operations and scale with ease. It offers intuitive control over
          products, categories, and administrators while ensuring a seamless
          workflow. With customizable settings for branding and real-time
          updates, it keeps businesses agile and efficient.
        </Animate>
      </div>
    </section>
  );
};
export default memo(Details);
