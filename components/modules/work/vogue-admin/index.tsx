import Loading from "@/components/custom/Loading";
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(
  () => import("@/components/modules/work/vogue-admin/Details"),
  {
    loading: Loading,
  }
);

const Dashboard = dynamic(
  () => import("@/components/modules/work/vogue-admin/Dashboard"),
  {
    loading: Loading,
  }
);

const DashboardMobile = dynamic(
  () => import("@/components/modules/work/vogue-admin/DashboardMobile"),
  {
    loading: Loading,
  }
);

const Brand = dynamic(
  () => import("@/components/modules/work/vogue-admin/Brand"),
  {
    loading: Loading,
  }
);

const BigScreen = dynamic(
  () => import("@/components/modules/work/vogue-admin/BigScreen"),
  {
    loading: Loading,
  }
);

const DarkCaption = dynamic(
  () => import("@/components/modules/work/vogue-admin/DarkCaption"),
  {
    loading: Loading,
  }
);
const Dark = dynamic(
  () => import("@/components/modules/work/vogue-admin/Dark"),
  {
    loading: Loading,
  }
);
const Features = dynamic(
  () => import("@/components/modules/work/vogue-admin/Features"),
  {
    loading: Loading,
  }
);
const Links = dynamic(
  () => import("@/components/modules/work/vogue-admin/Links"),
  {
    loading: Loading,
  }
);

const Work = () => {
  return (
    <div className="pt-16">
      <Details />
      <Dashboard />
      <DashboardMobile />
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
