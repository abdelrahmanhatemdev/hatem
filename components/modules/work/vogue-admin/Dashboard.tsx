"use client";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { fadeScale, fadeScaleD4 } from "@/lib/animation";
const Dashboard = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6 w-full">
      <div className="bg-neutral-950/50">
        <div className="w-full grid grid-cols-1 md:grid-cols-[35%_65%] p-3 lg:p-28 gap-4">
          <motion.div
            variants={fadeScaleD4}
            initial="hidden"
            whileInView={"visible"}
            className="flex items-end grow-0 max-w-96 text-lg order-2 md:order-1"
          >
            The Dashboard provides real-time insights with a clean, intuitive
            layout, keeping key metrics and trends easily accessible.
          </motion.div>
          <div className="flex flex-col gap-24 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 3, ease: easeInOut },
              }}
            >
              <Image
                src={`/assets/media/work/vogue-admin/dashboard-light.webp`}
                alt="Vogue Admin Dashboard"
                className="max-w-full md:max-w-[50vw] h-auto rounded-2xl"
                width={1017}
                height={617}
              />
            </motion.div>
            <motion.p
              variants={fadeScale}
              initial="hidden"
              whileInView={"visible"}
              className="max-w-96 text-lg"
            >
              With dynamic widgets and smooth navigation, it simplifies data
              analysis, empowering businesses to make quick, informed decisions.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
