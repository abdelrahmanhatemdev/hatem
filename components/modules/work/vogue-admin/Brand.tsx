import Image from "next/image";
import { memo } from "react";

const Brand = () => {
  return (
    <section className="flex justify-evenly py-32">
      <div className="flex w-[48%]">
        <Image
          src="/assets/media/work/vogue-admin/brand-2.webp"
          alt="Vogue Brand 2"
          className="border border-neutral-800 w-full"
          width={719}
          height={750}
        />
      </div>
      <div className="flex w-[48%] justify-end">
        <Image
          src="/assets/media/work/vogue-admin/brand-5.webp"
          alt="Vogue Brand 1"
          className="border border-neutral-800 w-full"
          width={719}
          height={750}
        />
      </div>
    </section>
  );
};
export default memo(Brand);
