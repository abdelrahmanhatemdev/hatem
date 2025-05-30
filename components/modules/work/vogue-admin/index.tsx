
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(
  () => import("@/components/modules/work/vogue-admin/Details")
);

const Home = dynamic(
  () => import("@/components/modules/work/vogue-admin/Home")
);

const HomeMobile = dynamic(
  () => import("@/components/modules/work/vogue-admin/HomeMobile")
);

const Brand = dynamic(
  () => import("@/components/modules/work/vogue-admin/Brand")
);

const BigScreen = dynamic(
  () => import("@/components/modules/work/vogue-admin/BigScreen")
);

const DarkCaption = dynamic(
  () => import("@/components/modules/work/vogue-admin/DarkCaption")
);
const Dark = dynamic(
  () => import("@/components/modules/work/vogue-admin/Dark")
);
const Features = dynamic(
  () => import("@/components/modules/work/vogue-admin/Features")
);
const Links = dynamic(
  () => import("@/components/modules/work/vogue-admin/Links")
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
