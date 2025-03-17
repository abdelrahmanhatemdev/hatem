"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { fadeD1, fadeDu1D1, fadeDu1D2, fadeDu1D3 } from "@/lib/animation";

const links = [
  {
    title: "Link",
    value: "Visit Site",
    href: "http://vogue-admin.vercel.app/",
  },
  {
    title: "Git",
    value: "Visit Git",
    href: "https://github.com/abdulrahmanhatem/vogue-admin",
  },
];
const Links = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex justify-between flex-wrap gap-20">
        <motion.div
          variants={fadeD1}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2 lg:gap-5"
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

        <div className="flex flex-col gap-5 text-2xl max-w-[800px]">
          <motion.p
            variants={fadeDu1D1}
            initial="hidden"
            whileInView="visible"
            className=" font-medium"
          >
            I crafted Vogue Admin with dedication and vision, shaping every
            detail with care. It&apos;s more than just a project—it&apos;s a journey of
            constant refinement and innovation. I&apos;m always working to make it
            better, and I&apos;d love to collaborate and take it even further
            together.
          </motion.p>
          <div className="flex flex-col">
            <motion.p
            variants={fadeDu1D2}
            initial="hidden"
            whileInView="visible" className="font-extrabold font-satoshi">
              <span className="text-neutral-600">Abdelrahman</span> Hatem
            </motion.p>
            <motion.p
            variants={fadeDu1D3}
            initial="hidden"
            whileInView="visible" className="text-base">
              Nextjs <span className="text-neutral-600">Developer</span>{" "}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Links);
