import Image from "next/image";
import { fadeDu1D3, fadeScale, fadeScaleD4 } from "@/lib/animation";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Dashboard = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6 w-full">
      <div className="bg-neutral-950/50">
        <div className="w-full grid grid-cols-1 md:grid-cols-[35%_65%] p-3 lg:p-28 gap-4">
          <Animate
            variants={fadeScaleD4}
            className="flex items-end grow-0 max-w-96 text-lg order-2 md:order-1"
          >
            The Dashboard provides real-time insights with a clean, intuitive
            layout, keeping key metrics and trends easily accessible.
          </Animate>
          <div className="flex flex-col gap-24 order-1 md:order-2">
            <Animate
              variants={fadeDu1D3}
            >
              <Image
                src={`/assets/media/work/vogue-admin/home-light.webp`}
                alt="Vogue Admin Dashboard"
                className="max-w-full md:max-w-[50vw] h-auto rounded-2xl"
                width={1017}
                height={617}
                 loading="lazy"
              />
            </Animate>
            <Animate element="p"
              variants={fadeScale}
              className="max-w-96 text-lg"
            >
              With dynamic widgets and smooth navigation, it simplifies data
              analysis, empowering businesses to make quick, informed decisions.
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
