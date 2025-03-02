import { memo } from "react";

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

const Details = () => {
  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const boxTwoVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.2 },
    },
  };
  const boxThreeVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.4 },
    },
  };
  const boxFourVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: { ...animationVariants.visible.transition, delay: 0.5 },
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
    <section className="px-3 md:px-6">
      <h1 className="py-8 lg:py-16 text-[10vw] md:text-[9vw] font-black font-satoshi">
        Vogue Admin
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        <div className="flex gap-5 lg:gap-20">
          <div className="flex flex-col gap-2 lg:gap-5">
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Timeframe</h2>
              <p className="text-xs lg:text-2xl tracking-widest font-medium">
                2 months
              </p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Role</h2>
              <p className="text-xs lg:text-2xl tracking-widest font-medium">
                Frontend/Backend
              </p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Type</h2>
              <p className="text-xs lg:text-2xl tracking-widest font-medium">
                Dashboard
              </p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Link</h2>
              <a
                target="_blank"
                href="/"
                className="text-xs lg:text-2xl tracking-widest font-medium"
              >
                Visit Site
              </a>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Git</h2>
              <a
                target="_blank"
                href="https://github.com/abdulrahmanhatem/vogue-admin"
                className="text-xs lg:text-2xl tracking-widest font-medium"
              >
                Visit Git
              </a>
            </div>
          </div>
          <div className="border-s border-neutral-200 px-2 text-neutral-500 font-semibold text-xs md:text-sm pb-5">
            {stack.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </div>
        </div>
        <div className="text-base md:text-3xl font-medium text-neutral-200">
          I designed Vogue Admin as a powerful e-commerce platform to streamline
          operations and scale with ease. It offers intuitive control over
          products, categories, and administrators while ensuring a seamless
          workflow. With customizable settings for branding and real-time
          updates, it keeps businesses agile and efficient.
        </div>
      </div>
    </section>
  );
};
export default memo(Details);
