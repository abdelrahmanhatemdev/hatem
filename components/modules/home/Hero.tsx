import { memo } from "react";
import dynamic from "next/dynamic";
const HeroSwiper = dynamic(() => import("@/components/modules/home/hero/HeroSwiper"));

const Hero = () => {
  return (
    <section className="h-screen w-[90%] 2xl:w-[70%] mx-auto">
      <HeroSwiper />
    </section>
  );
};
export default memo(Hero);
