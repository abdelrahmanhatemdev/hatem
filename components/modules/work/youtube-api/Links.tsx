"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { fadeD1, fadeDu1D1, fadeDu1D2, fadeDu1D3 } from "@/lib/animation";
import { links } from "@/data/youtubeAPI";

const Links = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex justify-between flex-wrap gap-20">
        <motion.div
          variants={fadeD1}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2 lg:gap-5 order-2 md:order-1"
        >
          {links.map((item, i) => {
            const valueClass =
              "text-xs lg:text-2xl tracking-widest font-medium";
            return (
              <div className="flex flex-col *:leading-6" key={i}>
                <h2 className="text-neutral-400 font-semibold">{item.title}</h2>
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

        <div className="flex flex-col gap-5 md:text-[1.5vw] lg:text-[1.2vw] md:max-w-[40vw] order-1 md:order-2">
          <motion.p
            variants={fadeDu1D1}
            initial="hidden"
            whileInView="visible"
            className=" font-medium"
          >
            This YouTube UI clone is the result of careful design and constant
            evolution. Each feature is crafted to mirror the essence of the
            YouTube experience, with a focus on functionality and smoothness.
            It&apos;s an ongoing project that I&apos;m always refining, and I&apos;m excited to
            collaborate to make it even better.
          </motion.p>
          <div className="flex flex-col">
            <motion.p
              variants={fadeDu1D2}
              initial="hidden"
              whileInView="visible"
              className="font-extrabold font-satoshi"
            >
              <span className="text-neutral-600 md:text-[1.2vw] lg:text-[1vw]">
                Abdelrahman
              </span>{" "}
              Hatem
            </motion.p>
            <motion.p
              variants={fadeDu1D3}
              initial="hidden"
              whileInView="visible"
              className="text-base md:text-[1vw] lg:text-[0.8vw]"
            >
              Nextjs <span className="text-neutral-600">Developer</span>{" "}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Links);
