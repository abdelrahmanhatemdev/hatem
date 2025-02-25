import Image from "next/image";
import { memo } from "react";

const Dark = () => {
  return (
    <section className="px-6">
      <div className="flex flex-col gap-10 justify-center items-center bg-neutral-950/50 py-32 ">
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
            <div>
              <Image
                src="/assets/media/work/vogue-admin/dashboard.webp"
                alt="Dark Theme 1"
                className="rounded-2xl border-[10px] border-neutral-950/50"
                width={1000}
                height={620}
              />
            </div>
            <div>
              <Image
                src="/assets/media/work/vogue-admin/dashboard.webp"
                alt="Dark Theme 2"
                className="rounded-2xl border-[10px] border-neutral-950/50"
                width={1000}
                height={620}
              />
            </div>
            <div>
              <Image
                src="/assets/media/work/vogue-admin/dashboard.webp"
                alt="Dark Theme 3"
                className="rounded-2xl border-[10px] border-neutral-950/50"
                width={1000}
                height={620}
              />
            </div>
          </div>
          <div>Content</div>
        </div>
      </div>
    </section>
  );
};
export default memo(Dark);
