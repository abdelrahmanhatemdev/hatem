
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(
  () => import("@/components/modules/work/simone/Details")
);

const Home = dynamic(
  () => import("@/components/modules/work/simone/Home")
);

const HomeMobile = dynamic(
  () => import("@/components/modules/work/simone/HomeMobile")
);

const Brand = dynamic(
  () => import("@/components/modules/work/simone/Brand")
);

const BigScreen = dynamic(
  () => import("@/components/modules/work/simone/BigScreen")
);

const DarkCaption = dynamic(
  () => import("@/components/modules/work/simone/DarkCaption")
);
const Dark = dynamic(
  () => import("@/components/modules/work/simone/Dark")
);
const Features = dynamic(
  () => import("@/components/modules/work/simone/Features")
);
const Links = dynamic(
  () => import("@/components/modules/work/simone/Links")
);

const Work = () => {
  return (
    <div className="pt-16">
      <Details />
      <Home />
      <HomeMobile />
      <Brand />
      <BigScreen />
      <DarkCaption />
      <Dark />
      <Features />
      <Links />
    </div>
  );
};
export default memo(Work);
