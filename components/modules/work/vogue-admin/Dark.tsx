import Image from "next/image";
import { memo } from "react";

const Dark = () => {
  return (
    <section className="px-6">
      <div className=" bg-neutral-950/50 pt-32 overflow-hidden ">
        <div className="flex flex-col gap-32 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[900px]">
            <div className="px-5">
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm.webp"
                alt="Dark Theme 1"
                className="rounded-2xl border-[5px] border-neutral-950/50"
                width={1000}
                height={620}
              />
            </div>
            <div className="px-5 pt-16">
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm.webp"
                alt="Dark Theme 1"
                className="rounded-2xl border-[5px] border-neutral-950/50"
                width={1000}
                height={620}
              />
            </div>
            <div className="px-5 pt-32">
              <Image
                src="/assets/media/work/vogue-admin/dashboard-sm.webp"
                alt="Dark Theme 1"
                className="rounded-2xl border-[5px] border-neutral-950/50"
                width={1000}
                height={620}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 sticky top-0 px-6 lg:px-32 w-full">
            <h2 className="font-ogg text-6xl">
              <p className="leading-20">Breathtaking Experience</p>
              <p className="leading-20"> In Light and Dark</p>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] gap-5">
              <p className="text-lg font-medium text-neutral-400">
                Dark mode improves visual comfort by minimizing glare and
                reducing eye fatigue, making extended screen use easier on the
                eyes. It adapts to different lighting conditions, ensuring a
                smooth and comfortable experience, especially in dim
                environments.
              </p>
              <p className="text-lg font-medium text-neutral-400 md:px-5">
                Beyond aesthetics, dark mode boosts battery life on OLED and
                AMOLED screens by using less power, allowing for longer device
                usage.
              </p>
            </div>
          </div>
        </div>
        <div className="font-ogg text-[40vw] h-[36vw] flex justify-center">Dark</div>
      </div>
    </section>
  );
};
export default memo(Dark);
