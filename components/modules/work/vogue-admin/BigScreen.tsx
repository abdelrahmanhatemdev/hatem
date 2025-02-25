import Image from "next/image";
import { memo } from "react";

const BigScreen = () => {
  return (
    <section className="py-6 px-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] p-28 div bg-neutral-950/50">
        <div className="flex flex-col gap-10">
          <div className="max-w-[750px]">
            <Image
              src="/assets/media/work/vogue-admin/dashboard-light.webp"
              alt="Next.js Development"
              className="rounded-[3rem] border-[10px] border-neutral-900/50 w-full"
              width={1000}
              height={620}
            />
          </div>
          <div className="max-w-[750px]">
            <Image
              src="/assets/media/work/vogue-admin/dashboard-light.webp"
              alt="Next.js Development"
              className="rounded-[3rem] border-[10px] border-neutral-900/50 w-full"
              width={1000}
              height={620}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 sticky top-0">
          <h2 className="font-ogg text-6xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="pe-4">
              <div className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center">
                <h3 className="text-xl font-semibold">Real-Time Updates</h3>
                <p className="font-semibold text-neutral-400">
                  Instantly reflects changes and new data, keeping users
                  informed without manual refreshes.
                </p>
              </div>
            </div>
            <div className="ps-4">
              <div className="bg-gradient-to-r from-neutral-900/50 to-[#1f1f1f]/50 rounded-3xl border p-10 border-neutral-800 h-full flex flex-col gap-4 justify-center">
                <h3 className="text-xl font-semibold">
                  Intelligent Navigation
                </h3>
                <p className="font-semibold text-neutral-400">
                  A well-structured menu and shortcuts allow users to access key
                  sections effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(BigScreen);
