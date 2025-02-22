import { memo } from "react";

const DashboardMobile = () => {
  return (
    <section className="py-32 px-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] p-28">
        <div className="flex flex-col gap-10">
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
export default memo(DashboardMobile);
