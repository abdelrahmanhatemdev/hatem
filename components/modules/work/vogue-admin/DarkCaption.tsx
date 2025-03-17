"use client"
import Image from "next/image";
import { memo } from "react";
import {motion} from "framer-motion"
import { fadeDu1D3, fadeScaleD1 } from "@/lib/animation";

const DarkCaption = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex flex-col gap-16 justify-center items-center">
        <div>
          <motion.div variants={fadeDu1D3} initial="hidden" whileInView="visible" className="w-full h-full">
            <Image
              src="/assets/media/work/vogue-admin/dashboard.webp"
              alt="Dashboard"
              className="rounded-xl border-[10px] border-neutral-950/50 w-full"
              width={1017}
              height={617}
            />
          </motion.div>
        </div>
        <motion.p variants={fadeScaleD1} initial="hidden" whileInView="visible" className="text-lg md:text-2xl max-w-[600px] text-center font-satoshi text-neutral-500">
          User research showed that a{" "}
          <strong className="font-semibold text-white">
            dark theme reduces eye strain, fatigue and enhances usability
          </strong>{" "}
          in low-light environments.
        </motion.p>
      </div>
    </section>
  );
};
export default memo(DarkCaption);
