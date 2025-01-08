"use client";
import { motion } from "framer-motion";
import { memo } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import Image from "next/image";

const Stack = () => {
  const mainVariants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.9 },
  };

  const boxOneVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 1.5 },
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

  return (
    <section className="w-[80vw] md:w-[70vw] mx-auto mt-40">
      <div className="lg:hidden flex flex-col gap-4">
        <h2 className="text-7xl font-semibold text-white leading-[3rem]">
          Stack
        </h2>
        <p className="text-sm md:text-md 2xl:text-lg text-neutral-100">
          My preferred tools and the foundation behind my proficiency to create
          seamless high-performance applications.
        </p>
      </div>
      <div className="relative mt-12">
        <div className="w-full border border-dashed border-neutral-800 border-y-0">
          <div className="w-[105%] h-[5rem] md:h-[10vw] bg-gradient-to-b from-black to-transparent absolute top-0 -left-[2%] z-10"></div>
          <div className="w-[105%] h-[5rem] md:h-[10vw] bg-gradient-to-t from-black to-transparent absolute bottom-0 -left-[2%] z-10"></div>

          <div className="grid grid-cols-2 md:grid-cols-6">
            <div className="col-span-2 grid grid-cols-2 order-3 md:order-1">
              <div className="hidden md:block col-span-2  row-span-2 h-[calc(70vw/6)]"></div>
              <div className="hidden md:flex col-span-2  row-span-2 h-[calc(70vw/6)] md:flex-col md:gap-4 p-4">
                <h2 className="text-[6vw] font-semibold text-white leading-[6vw]">
                  Stack
                </h2>
                <p className="text-sm md:text-md 2xl:text-lg text-neutral-100">
                  My preferred tools and the foundation behind my proficiency to
                  create seamless high-performance applications.
                </p>
              </div>
              <div className="hidden md:block w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)]"></div>
              <div className="hidden md:block border-b border-neutral-800  w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)]"></div>
              <div className="hidden md:block border-b border-neutral-800  w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)]"></div>
             
              <div className="group border-e md:boder-e-none border-b border-s border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/github.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                Github
                </div>
              </div>
              <div className="group border-b border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/firebase.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Firebase
                </div>
              </div>
              <div className="group border-e md:boder-e-none border-b border-s  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/mysql.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  MySQL
                </div>
              </div>
              <div className="col-span-2 h-[calc(70vw/6)]"></div>
            </div>

            <div className="col-span-2 grid grid-cols-2 order-2">
              <div className="hidden md:block col-span-2 row-span-2 h-[calc(70vw/6)]"></div>
              <div className="group border-b border-neutral-800  w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)]"></div>
              <div className="group border-y border-s  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/zod.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Zod
                </div>
              </div>
              <div className="group border-b border-s  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/framer.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Framer Motion
                </div>
              </div>
              <div className="group border-b border-s  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/shadcn.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Shadcn
                </div>
              </div>
              <div className="group border-b border-s  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/eslint.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  ESLint
                </div>
              </div>
              <div className="group border-b border-s  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/Zustand.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Zustand
                </div>
              </div>
              <div className="group border-b border-x border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/vercel.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Vercel
                </div>
              </div>
              <div className="md:col-span-2 border-b md:border-s  border-neutral-800 h-[calc(80vw/2)] md:h-[calc(70vw/6)]"></div>
            </div>

            <div className="col-span-2 grid grid-cols-2 order-1 md:order-3">
              <div className="col-span-2 border-s  border-neutral-800 row-span-2 h-[calc(70vw/6)]"></div>
              <div className="group border-y border-x border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/react.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  React
                </div>
              </div>
              <div className="group border-y w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/nextjs.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Next.js
                </div>
              </div>
              <div className="group border-b border-x border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/tailwind.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Tailwind
                </div>
              </div>
              <div className="group border-b  border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/typescript.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  Typescript
                </div>
              </div>
              <div className="group border-b border-x border-neutral-800 w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] flex flex-col items-center justify-center p-5 md:p-[1.2vw] cursor-pointer hover:bg-neutral-950 transition-colors relative">
                <Image
                  src={`/assets/media/stack/chatgpt.png`}
                  alt={`React`}
                  width={200}
                  height={200}
                  priority={true}
                  className="transition duration-500 ease-in-out brightness-0 contrast-200 invert"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute w-full bottom-0 left-0 p-1 leading-3 text-sm">
                  ChatGPT
                </div>
              </div>
              <div className="hidden md:block w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] "></div>
              <div className="hidden md:block w-[calc(80vw/2)] h-[calc(80vw/2)] md:w-[calc(70vw/6)] md:h-[calc(70vw/6)] "></div>
              <div className="hidden md:block col-span-2 row-span-2 h-[calc(70vw/6)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Stack);
