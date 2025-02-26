import Image from "next/image";
import { memo } from "react";

const DashboardMobile = () => {
  return (
    <section className="py-10 md:py-32 px-3 md:px-6 w-full">
      <div className="flex justify-between flex-wrap gap-20 md:px-6 lg:px-28 w-full">
        <div className="flex flex-col gap-10 w-[600px] ">
          <h2 className="font-ogg text-4xl md:text-6xl">
            <p>Manage with Ease</p>
            <p>Anytime</p>
            <p>Anywhere</p>
          </h2>
          <p className="text-lg font-medium text-neutral-400">
            I built a responsive, user-friendly dashboard that adapts seamlessly
            to any device, ensuring a smooth experience. Its structured layout
            helps users stay focused, making key insights and actions easily
            accessible.
          </p>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center">
              <h3 className="text-xl font-semibold">Real-Time Updates</h3>
              <p className="font-semibold text-neutral-400">
                Instantly reflects changes and new data, keeping users informed
                without manual refreshes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center">
              <h3 className="text-xl font-semibold">Intelligent Navigation</h3>
              <p className="font-semibold text-neutral-400">
                A well-structured menu and shortcuts allow users to access key
                sections effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 grow lg:min-w-[600px]">
          <div className="flex items-center">
            <Image
              src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
              alt="Next.js Development"
              className="rounded-[2vw] border border-neutral-800"
              width={306}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
                alt="Next.js Development"
                className="rounded-[2vw] border border-neutral-800"
                width={306}
                height={600}
              />
            </div>
            <div>
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm-light.webp"
                alt="Next.js Development"
                className="rounded-[2vw] border border-neutral-800"
                width={306}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(DashboardMobile);
