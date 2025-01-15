"use client";
import { motion } from "framer-motion";
import { memo } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Stack = () => {
  const mainVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -200 },
  };

  const animationVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  const boxOneVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.5 },
    },
  };

  const boxTwoVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 2 },
    },
  };

  const boxThreeVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 2.5 },
    },
  };

  const technolegy = [
    {
      src: "react",
      title: "React",
      link: "https://react.dev/",
      description: [
        "React helps me build interactive and efficient user interfaces with ease.",
        "Its declarative nature simplifies how I manage the UI, while the virtual DOM ensures everything runs smoothly.",
        "With React's component-based structure, I can create reusable and maintainable code, which speeds up development and keeps things organized.",
      ],
    },
    {
      src: "nextjs",
      hoverSrc: "nextjs",
      title: "Next.js",
      link: "",
      description: [],
    },
    {
      src: "typescript",
      hoverSrc: "typescript-origin",
      title: "Typescript",
      link: "",
      description: [],
    },
    {
      src: "Zod",
      hoverSrc: "zod-origin",
      title: "Zod",
      link: "",
      description: [],
    },
    { src: "tailwind", title: "Tailwind", link: "", description: [] },
    { src: "shadcn", title: "Shadcn", link: "", description: [] },
    { src: "chatGPt", title: "ChatGPt", link: "", description: [] },
    {
      src: "eSlint",
      hoverSrc: "eslint-origin",
      title: "ESlint",
      link: "",
      description: [],
    },
    { src: "vercel", title: "Vercel", link: "", description: [] },
    {
      src: "framer",
      hoverSrc: "framer-origin",
      title: "Framer Motion",
      link: "",
      description: [],
    },
    { src: "github", title: "Github", link: "", description: [] },
    {
      src: "zustand",
      hoverSrc: "zustand-origin",
      title: "Zustand",
      link: "",
      description: [],
    },
    { src: "cloudflare", title: "Cloudflare", link: "", description: [] },
    { src: "firebase", title: "Firebase", link: "", description: [] },
    { src: "mySQL", title: "MySQL", link: "", description: [] },
    {
      src: "react-hook-form",
      hoverSrc: "react-hook-form-origin",
      title: "React Hook Form",
    },
  ];

  return (
    <section className="w-[80vw] md:w-[70vw] mx-auto mt-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={boxOneVariants}
      >
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl md:text-6xl  text-center">Stack</h2>
          <p className="text-sm md:text-md 2xl:text-lg text-neutral-400">
            My preferred tools and the foundation behind my proficiency to
            create seamless high-performance applications.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={mainVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-8 mt-10 gap-y-10">
          {technolegy.map((tech, index) => (
            <motion.div
              key={`${tech.src}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                ...animationVariants,
                visible: {
                  ...animationVariants.visible,
                  transition: {
                    ...animationVariants.visible.transition,
                    delay: 0.1 * (index + 1),
                  },
                },
              }}
              layout
            >
              <Popover>
                <PopoverTrigger>
                  <div className="px-10 flex flex-col gap-4">
                    <div className="group flex flex-col items-center justify-center cursor-pointer p-6 bg-neutral-900 transition-colors rounded-2xl">
                      <div className="relative">
                        <Image
                          src={`/assets/media/stack/${tech.src}.png`}
                          alt={`${tech.title}`}
                          width={200}
                          height={200}
                          priority={true}
                          className={cn(
                            "transition duration-500 ease-in-out brightness-0 contrast-200 invert",
                            tech.hoverSrc
                              ? "group-hover:opacity-0"
                              : "group-hover:brightness-100 group-hover:contrast-100 group-hover:invert-0"
                          )}
                        />
                        {tech.hoverSrc ? (
                          <Image
                            src={`/assets/media/stack/${tech.hoverSrc}.png`}
                            alt={`${tech.title}`}
                            width={200}
                            height={200}
                            priority={true}
                            className="opacity-0 group-hover:opacity-100 absolute inset-0 transition duration-500 ease-in-out group-hover:brightness-100 group-hover:contrast-100 group-hover:invert-0"
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="transition-opacity duration-500 w-full p-1 leading-3 text-sm text-center">
                      {tech.title}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="rounded-lg">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/assets/media/stack/${
                            tech.hoverSrc ? tech.hoverSrc : tech.src
                          }.png`}
                          alt={`${tech.title}`}
                          width={200}
                          height={200}
                          priority={true}
                          className={"w-8 h-8"}
                        />
                        <h4 className="text-lg">{tech.title}</h4>
                      </div>
                      <div className="flex flex-col gap-2 text-neutral-400">
                        {tech.description && tech.description.length > 0 
                        ? (
                          tech.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                        )
                        : <></>
                        }
                      </div>
                    </div>
                    <div className="grid gap-2">
                      
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default memo(Stack);
