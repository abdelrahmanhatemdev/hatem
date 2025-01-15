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
import { GoArrowUpRight } from "react-icons/go";

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
      link: "https://nextjs.org/",
      description: [
        "Next.js makes it easy for me to build fast and modern web apps. Its server-side rendering and static site generation help me deliver better performance and SEO without extra effort.",
        "I love how its file-based routing and built-in API routes simplify my workflow. I can focus on building features instead of worrying about setup or backend complexities.",
        "Deploying with Next.js feels seamless, whether it’s serverless or static. It’s the framework I trust to create apps that are fast, scalable, and just work.",
      ],
    },
    {
      src: "typescript",
      hoverSrc: "typescript-origin",
      title: "Typescript",
      link: "https://www.typescriptlang.org/",
      description: [
        "TypeScript helps me write clean and reliable code. Its static typing catches errors early, so I spend less time debugging and more time building.",
        "I love how it enhances my development experience with better autocompletion and clear documentation. It makes working in larger codebases feel organized and manageable.",
        "With TypeScript, I can confidently ship features knowing my code is predictable and maintainable. It’s a tool I rely on every day to write better software.",
      ],
    },
    {
      src: "Zod",
      hoverSrc: "zod-origin",
      title: "Zod",
      link: "https://zod.dev/",
      description: [
        "Zod helps me validate and parse data with confidence. Its schema-based approach ensures my data is always safe and predictable.",
        "I love how easy it is to define schemas and integrate them into my workflow. It simplifies both client-side and server-side validation.",
        "With Zod, I can catch issues early and write cleaner, more reliable code. It's my go-to tool for managing data integrity in any project.",
      ],
    },
    {
      src: "tailwind",
      title: "Tailwind",
      link: "https://tailwindcss.com/",
      description: [
        "Tailwind helps me style my apps faster and more efficiently with its utility-first approach.",
        "I love how it eliminates the need for writing custom CSS, keeping my codebase clean and consistent.",
        "With Tailwind, I can quickly create responsive, modern designs without leaving my HTML.",
      ],
    },
    {
      src: "shadcn",
      title: "Shadcn",
      link: "https://ui.shadcn.com/",
      description: [
        "ShadCN helps me build beautiful, accessible UI components effortlessly.",
        "I love how it combines Tailwind with reusable components, saving me time on design and development.",
        "With ShadCN, I can create polished, modern interfaces that look great and work seamlessly.",
      ],
    },
    {
      src: "chatGPt",
      title: "ChatGPt",
      link: "https://chat.openai.com/",
      description: [
        "ChatGPT helps me brainstorm ideas, solve problems, and speed up my workflow effortlessly.",
        "I love how it provides clear explanations, writes code snippets, and even refines my writing when needed.",
        "With ChatGPT, I can tackle complex tasks more efficiently and stay focused on what matters most.",
      ],
    },
    {
      src: "eSlint",
      hoverSrc: "eslint-origin",
      title: "ESlint",
      link: "https://eslint.org/",
      description: [
        "ESLint helps me catch errors and enforce consistent coding standards in my projects.",
        "I love how it integrates seamlessly with my editor, giving instant feedback as I write code.",
        "With ESLint, I can maintain clean, reliable codebases and focus on building great features.",
      ],
    },
    {
      src: "vercel",
      title: "Vercel",
      link: "https://vercel.com/",
      description: [
        "Vercel makes deploying my projects incredibly fast and simple, with zero configuration needed.",
        "I love how it handles scaling and performance out of the box, so I can focus on development.",
        "With Vercel, I can ship apps confidently, knowing they’re optimized for speed and reliability.",
      ],
    },
    {
      src: "framer",
      hoverSrc: "framer-origin",
      title: "Framer Motion",
      link: "https://www.framer.com/motion/",
      description: [
        "Framer Motion helps me add smooth, interactive animations to my projects effortlessly.",
        "I love how intuitive it is to create complex motion effects with just a few lines of code.",
        "With Framer Motion, I can make my UIs feel dynamic and engaging without sacrificing performance.",
      ],
    },
    {
      src: "github",
      title: "Github",
      link: "https://github.com/",
      description: [
        "GitHub helps me manage and version control my code with ease.",
        "I love how it integrates with other tools, enabling smooth collaboration and deployment workflows.",
        "With GitHub, I can track changes, collaborate with teams, and showcase my projects to the world.",
      ],
    },
    {
      src: "zustand",
      hoverSrc: "zustand-origin",
      title: "Zustand",
      link: "https://zustand-demo.pmnd.rs/",
      description: [
        "Zustand helps me manage state in my apps with a simple and lightweight API.",
        "I love how easy it is to create and update state without unnecessary boilerplate.",
        "With Zustand, I can keep my state management clean, fast, and easy to scale.",
      ],
    },
    {
      src: "cloudflare",
      title: "Cloudflare",
      link: "https://www.cloudflare.com/",
      description: [
        "Cloudflare helps me deliver fast and secure web experiences with its powerful CDN and DDoS protection.",
        "I love how it improves performance and security effortlessly, letting me focus on development.",
        "With Cloudflare, I can ensure my apps are reliable, fast, and safe for users worldwide.",
      ],
    },
    {
      src: "firebase",
      title: "Firebase",
      link: "https://firebase.google.com/",
      description: [
        "Firebase helps me build and scale apps quickly with its powerful backend services.",
        "I love how it simplifies tasks like authentication, database management, and hosting.",
        "With Firebase, I can focus on building features while it handles the heavy lifting behind the scenes.",
      ],
    },
    {
      src: "mySQL",
      title: "MySQL",
      link: "https://www.mysql.com/",
      description: [
        "MySQL helps me manage structured data efficiently with its reliable and powerful database system.",
        "I love how it offers flexibility with complex queries and ensures data consistency at scale.",
        "With MySQL, I can build robust, data-driven applications that perform seamlessly.",
      ],
    },
    {
      src: "react-hook-form",
      hoverSrc: "react-hook-form-origin",
      title: "React Hook Form",
      link: "https://react-hook-form.com/",
      description: [
        "React Hook Form helps me handle form validation and state effortlessly in my apps.",
        "I love how it simplifies working with forms by minimizing re-renders and using native inputs.",
        "With React Hook Form, I can create fast, reliable, and user-friendly forms with ease.",
      ],
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
                        {tech.description && tech.description.length > 0 ? (
                          tech.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-2 border-t pt-4 border-neutral-500 w-full">
                      <a
                        href={`${tech.link}`}
                        target="_blank"
                        className="bg-neutral-200 text-neutral-950 rounded-md p-2 flex justify-center items-center gap-1 font-bold hover:bg-white transition-colors hover:text-black"
                      >
                        To {tech.title} <GoArrowUpRight size={20} />
                      </a>
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
