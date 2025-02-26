import Image from "next/image";
import { memo } from "react";

const DarkCaption = () => {
  return (
    <section className="py-32 px-6">
      <div className="flex flex-col gap-16 justify-center items-center">
        <div>
          <Image
            src="/assets/media/work/vogue-admin/dashboard.webp"
            alt="Next.js Development"
            className="rounded-2xl border-[10px] border-neutral-950/50 w-full"
            width={1000}
            height={620}
          />
        </div>
        <p className="text-2xl max-w-[600px] text-center font-satoshi text-neutral-500">
          User research showed that a{" "}
          <strong className="font-semibold text-white">
            dark theme reduces eye strain, fatigue and enhances usability
          </strong>{" "}
          in low-light environments.
        </p>
      </div>
    </section>
  );
};
export default memo(DarkCaption);
