import { memo } from "react";
const Details = () => {
  return (
    <section className="px-6">
      <h1 className="py-36 text-9xl font-black font-satoshi">Vogue Admin</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        <div className="grid grid-cols-1 sm:grid-cols-[35%_65%]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Timeframe</h2>
              <p className="text-2xl tracking-widest font-medium">2 months</p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Role</h2>
              <p className="text-2xl tracking-widest font-medium">
                Frontend/Backend
              </p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Type</h2>
              <p className="text-2xl tracking-widest font-medium">Dashboard</p>
            </div>
            <div className="flex flex-col *:leading-6">
              <h2 className="text-neutral-400 font-semibold">Link</h2>
              <p className="text-2xl tracking-widest font-medium">Visit Site</p>
            </div>
          </div>
          <div className="border-s border-neutral-200 px-2 text-neutral-500 font-semibold text-sm pb-5">
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
        <div className="text-2xl font-medium text-neutral-200">
          I designed Vogue Admin as a powerful e-commerce management platform to
          help brands streamline operations and scale with ease. It provides
          intuitive control over products, categories, and administrators while
          ensuring a seamless and structured workflow. With a strong focus on
          brand consistency, it offers customizable settings for appearance,
          currency management, and global notifications. Advanced state
          management ensures smooth performance, while real-time updates keep
          businesses agile. From organizing product catalogs to optimizing
          administrative tasks, Vogue Admin empowers brands to operate
          efficiently and maintain a strong online presence.
        </div>
      </div>
    </section>
  );
};
export default memo(Details);
