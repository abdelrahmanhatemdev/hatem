"use client";
import { memo } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import { useInView, motion } from "framer-motion";

import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

const Expertise = () => {
  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const boxTwoVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.3 },
    },
  };
  const boxThreeVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.5 },
    },
  };
  const boxFourVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.3 },
    },
  };
  const boxFiveVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.5 },
    },
  };
  const boxSixVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.7 },
    },
  };

  return (
    <section className="w-full mt-32 px-10">
      <div className="2xl:w-[80vw] mx-auto flex flex-col gap-10">
        <h2 className="md:text-6xl  text-center p-4">Areas of Expertise</h2>
        <div className="grid md:grid-cols-[repeat(3,calc(33.33333%-1.666666666rem))] gap-5 lg:gap-10 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden">
              <Image
                src="/assets/media/icons/nextjs.png"
                alt="Next.js Development"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold ">Next.js Development</h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                Next.js is more than just a React framework; it's the backbone
                of modern web applications. With expertise in server-side
                rendering, static site generation, and API integrations, I build
                fast, scalable, and SEO-friendly web applications tailored to
                your needs.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxTwoVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden">
              <Image
                src="/assets/media/icons/frontend.png"
                alt="Frontend Development"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold ">Frontend Development</h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                Crafting pixel-perfect, responsive, and accessible interfaces is
                at the core of my skill set. Leveraging React and Next.js, I
                create intuitive user experiences that work seamlessly across
                devices and browsers.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxThreeVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden">
              <Image
                src="/assets/media/icons/fullstack.png"
                alt="Full-stack Development"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold ">Full-Stack Development</h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                From the user interface to the database, I bring expertise in
                creating end-to-end solutions. Whether it's integrating MySQL or
                using serverless architectures, I deliver reliable, scalable,
                and maintainable applications.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxFourVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden">
              <Image
                src="/assets/media/icons/api.png"
                alt="API Integration"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold ">API Integration</h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                Seamlessly connecting frontend applications with robust backends
                is key to delivering dynamic experiences. I specialize in
                integrating RESTful APIs, GraphQL, and third-party services to
                ensure smooth data flow and functionality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxFiveVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden">
              <Image
                src="/assets/media/icons/performance.png"
                alt="Performance Optimization"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold ">
                Performance Optimization
              </h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                CSpeed is crucial for user retention and SEO. I focus on code
                splitting, lazy loading, and other optimization techniques to
                ensure your Next.js application runs efficiently without
                compromising quality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={boxSixVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-2 overflow-hidden">
              <Image
                src="/assets/media/icons/seo.png"
                alt="SEO and Accessibility"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold ">SEO and Accessibility</h3>
              <p className="text-sm font-semibold text-neutral-400 line-clamp-6">
                A great website is one that everyone can use and find. I
                implement technical SEO strategies, structured data, and
                accessibility best practices to maximize your site's reach and
                usability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default memo(Expertise);
