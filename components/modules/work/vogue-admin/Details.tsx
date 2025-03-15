"use client";
import { memo } from "react";
import { easeInOut, motion } from "framer-motion";
import { fade, fadeD2, fadeD5, fadeScaleD2 } from "@/lib/animation";

export const stack = [
  "Nextjs",
  "React",
  "Typescript",
  "Tailwind",
  "Shadcn",
  "Zustand",
  "React form hook",
  "Zod",
  "Tanstack",
  "Framer Motion",
  "Swiper",
  "Recharts",
  "Firebase",
  "Redis",
  "ESLint",
  "Vercel",
];

const details = [
  {
    title: "Timeframe",
    value: "2 months",
  },
  {
    title: "Role",
    value: "Frontend/Backend",
  },
  {
    title: "Type",
    value: "Dashboard",
  },
  {
    title: "Link",
    value: "Visit Site",
    href: "/",
  },
  {
    title: "Git",
    value: "Visit Git",
    href: "https://github.com/abdulrahmanhatem/vogue-admin",
  },
];

const Details = () => {
  return (
    <section className="px-3 md:px-6">
      <motion.h1
        variants={fade}
        initial="hidden"
        whileInView="visible"
        className="py-8 lg:py-16 text-[10vw] md:text-[9vw] font-black font-satoshi"
      >
        Vogue Admin
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        <div className="flex gap-5 lg:gap-20">
          <motion.div variants={fadeD2} initial="hidden" whileInView="visible" className="flex flex-col gap-2 lg:gap-5">
            {details.map((item, i) => {
              const valueClass =
                "text-xs lg:text-2xl tracking-widest font-medium";
              return (
                <div
                  className="flex flex-col *:leading-6"
                  key={i}
                >
                  <h2 className="text-neutral-400 font-semibold">
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
          </motion.div>
          <motion.div 
          initial= {{opacity: 0, height: 0}}
          whileInView={{opacity:1, height: "100%", transition: {duration: 2.5, ease: easeInOut}}}
          
          className="border-s border-neutral-200 px-2 text-neutral-500 font-semibold text-xs md:text-sm pb-5">
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
        <motion.div 
        variants={fadeD5}
        initial="hidden"
        whileInView="visible"
        className="text-base md:text-3xl font-medium text-neutral-200">
          I designed Vogue Admin as a powerful e-commerce platform to streamline
          operations and scale with ease. It offers intuitive control over
          products, categories, and administrators while ensuring a seamless
          workflow. With customizable settings for branding and real-time
          updates, it keeps businesses agile and efficient.
        </motion.div>
      </div>
    </section>
  );
};
export default memo(Details);
