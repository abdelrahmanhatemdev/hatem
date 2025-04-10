"use client"
import Loading from "@/components/custom/Loading";
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(
  () => import("@/components/modules/work/vogue-admin/Details"),
  {
    loading: Loading,
    ssr: false 
  }
);

const Dashboard = dynamic(
  () => import("@/components/modules/work/vogue-admin/Dashboard"),
  {
    loading: Loading,
    ssr: false 
  }
);

const DashboardMobile = dynamic(
  () => import("@/components/modules/work/vogue-admin/DashboardMobile"),
  {
    loading: Loading,
    ssr: false 
  }
);

const Brand = dynamic(
  () => import("@/components/modules/work/vogue-admin/Brand"),
  {
    loading: Loading,
    ssr: false 
  }
);

const BigScreen = dynamic(
  () => import("@/components/modules/work/vogue-admin/BigScreen"),
  {
    loading: Loading,
    ssr: false 
  }
);

const DarkCaption = dynamic(
  () => import("@/components/modules/work/vogue-admin/DarkCaption"),
  {
    loading: Loading,
    ssr: false 
  }
);
const Dark = dynamic(
  () => import("@/components/modules/work/vogue-admin/Dark"),
  {
    loading: Loading,
    ssr: false 
  }
);
const Features = dynamic(
  () => import("@/components/modules/work/vogue-admin/Features"),
  {
    loading: Loading,
    ssr: false 
  }
);
const Links = dynamic(
  () => import("@/components/modules/work/vogue-admin/Links"),
  {
    loading: Loading,
    ssr: false 
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
