"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeScale } from "@/lib/animation";
import LazyAnimation from "@/components/custom/animation/LazyAnimation";

const expertiseList = [
  {
    title: "Next.js Development",
    icon: "nextjs",
    details: `Next.js is more than just a React framework; it's the backbone
                of modern web applications. With expertise in server-side
                rendering, static site generation, and API integrations, I build
                fast, scalable, and SEO-friendly web applications tailored to
                your needs.`,
  },
  {
    title: "Frontend Development",
    icon: "frontend",
    details: `Crafting pixel-perfect, responsive, and accessible interfaces is
                at the core of my skill set. Leveraging React and Next.js, I
                create intuitive user experiences that work seamlessly across
                devices and browsers.`,
  },
  {
    title: "Full-Stack Development",
    icon: "fullstack",
    details: `From the user interface to the database, I bring expertise in
                creating end-to-end solutions. Whether it's integrating
                MySQL or using serverless architectures, I deliver reliable,
                scalable, and maintainable applications.`,
  },
  {
    title: "API Integration",
    icon: "api",
    details: `Seamlessly connecting frontend applications with robust backends
                is key to delivering dynamic experiences. I specialize in
                integrating RESTful APIs, GraphQL, and third-party services to
                ensure smooth data flow and functionality.`,
  },
  {
    title: "Performance Optimization",
    icon: "performance",
    details: `Speed is crucial for user retention and SEO. I focus on code
                splitting, lazy loading, and other optimization techniques to
                ensure your Next.js application runs efficiently without
                compromising quality.`,
  },
  {
    title: "SEO and Accessibility",
    icon: "seo",
    details: `A great website is one that everyone can use and find. I
                implement technical SEO strategies, structured data, and
                accessibility best practices to maximize your site's reach
                and usability.`,
  },
];

const Expertise = () => {
  return (
    <section className="w-full mt-32">
      <div className="w-[90%] 2xl:w-[70%] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl text-center p-4">Areas of Expertise</h2>
        <div className="grid md:grid-cols-[repeat(3,calc(33.33333%-1.666666666rem))] gap-5 lg:gap-10 ">
          {expertiseList.map((item, i) => (
            <LazyAnimation key={`${i}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  ...fadeScale,
                  visible: {
                    ...fadeScale.visible,
                    transition: {
                      ...fadeScale.visible.transition,
                      delay: 0.05 ,
                    },
                  },
                }}
                layout
                className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden"
              >
                <Image
                  src={`/assets/media/icons/${item.icon}.webp`}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="w-10 h-10"
                />
                <h3 className="text-lg font-semibold ">{item.title}</h3>
                <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                  {item.details}
                </p>
              </motion.div>
            </LazyAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
export default memo(Expertise);
