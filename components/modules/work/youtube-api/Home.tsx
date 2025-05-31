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
            Dive into a stream of real-time video content with a sleek,
            scrollable interface that puts trending and recommended videos at
            your fingertips.
          </Animate>
          <div className="flex flex-col gap-24 order-1 md:order-2">
            <Animate variants={fadeDu1D3}>
              <Image
                src={`/assets/media/work/youtube-api/home-light.webp`}
                alt="Vogue Admin Dashboard"
                className="max-w-full md:max-w-[50vw] h-auto rounded-2xl"
                width={1017}
                height={617}
                loading="lazy"
              />
            </Animate>
            <Animate variants={fadeScale} className="max-w-96 text-lg">
              Paired with intelligent search, every interaction feels fast,
              fluid, and addictive—just like the YouTube experience, reimagined.
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
