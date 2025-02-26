import { memo } from "react";
const Details = () => {
  return (
    <section className="px-3 md:px-6">
      <h1 className="py-8 lg:py-16 text-[10vw] md:text-[9vw] font-black font-satoshi">Vogue Admin</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        <div className="flex gap-5 lg:gap-20">
          <div className="flex flex-col gap-2 lg:gap-5">
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Timeframe</h2>
              <p className="text-xs lg:text-2xl tracking-widest font-medium">2 months</p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Role</h2>
              <p className="text-xs lg:text-2xl tracking-widest font-medium">
                Frontend/Backend
              </p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Type</h2>
              <p className="text-xs lg:text-2xl tracking-widest font-medium">Dashboard</p>
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
            <p>Nextjs</p>
            <p>React</p>
            <p>Typescript</p>
            <p>Tailwind</p>
            <p>Shadcn</p>
            <p>Zustand</p>
            <p>React form hook</p>
            <p>Zod</p>
            <p>Tanstack</p>
            <p>Framer Motion</p>
            <p>Swiper</p>
            <p>Recharts</p>
            <p>Firebase</p>
            <p>Redis</p>
            <p>ESLint</p>
            <p>Vercel</p>
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
