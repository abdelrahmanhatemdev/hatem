import Image from "next/image";
import { memo } from "react";

const BigScreen = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-20 xl:gap-0 px-3 pt-10 md:p-28 div bg-neutral-950/50">
        <div className="flex flex-col items-center xl:items-start gap-10  order-2 xl:order-1 ">
          <div className="max-w-[750px]">
            <Image
              src="/assets/media/work/vogue-admin/dashboard-light.webp"
              alt="Next.js Development"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 w-full"
              width={1000}
              height={620}
            />
          </div>
          <div className="max-w-[750px]">
            <Image
              src="/assets/media/work/vogue-admin/dashboard-light.webp"
              alt="Next.js Development"
              className="rounded-lg md:rounded-[3rem] border-4 md:border-[10px] border-neutral-900/50 w-full"
              width={1000}
              height={620}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 order-1 xl:order-2">
          <h2 className="font-ogg text-4xl md:text-6xl">
            <p>Built for Efficiency</p>
            <p>Made for You</p>
          </h2>
          <p className="text-lg font-medium text-neutral-400">
            I designed it to simplify e-commerce management, making
            tasks faster and more intuitive. With a clean interface and smart
            features, it helps businesses stay organized and efficient. Every
            element is built for productivity, giving users seamless control
            over their store with minimal effort.
          </p>
          <p className="text-lg font-medium text-neutral-400">I focused on creating a smooth, hassle-free experience where every action feels natural and efficient. From managing products to tracking key metrics, Vogue Admin ensures users can navigate effortlessly and make informed decisions without distractions.</p>
         
        </div>
      </div>
    </section>
  );
};
export default memo(BigScreen);
